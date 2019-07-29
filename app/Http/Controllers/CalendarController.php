<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use Calendar;
use Validator;
use App\Events;
use App\Tasks;
use Auth;

use Illuminate\Support\Facades\DB;



class CalendarController extends Controller
{
    public function index(Request $request)
    {

        $data = Tasks::whereNotNull('id');
        $user_name = Auth::user()->name;
        $id= Auth::user()->id;
        $email = Auth::user()->email;
        $admin = DB::table('team_manager')->where('name',$user_name)->first();
        if($admin->role_id == 1){
            $data = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->get();
            $customer = DB::table('accounts')->select('customer')->get(); 
            $department = DB::table('accounts')->select('department')->get(); 
            $service = DB::table('services')->select('service')->get(); 
            $task = DB::table('services')->select('task')->get(); 
            $team_members = DB::table('team_members')->select('territory')->get(); 
            $device_type = DB::table('services')->select('device_type')->get(); 
            $name = DB::table('team_members')->select('name')->get(); 
            $assigned_sales_rep = DB::table('team_members')->select('name')->get(); 
        }else if($admin->role_id == 2) {
            $data = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->where('team_manager_id', '=', $id)->get();
            $customer = DB::table('accounts')->select('customer')->where('team_manager_id',$id)->get(); 
            $department = DB::table('accounts')->select('department')->where('team_manager_id',$id)->get(); 
            $service = DB::table('services')->select('service')->where('team_manager_id',$id)->get(); 
            $task = DB::table('services')->select('task')->where('team_manager_id',$id)->get(); 
            $team_members = DB::table('team_members')->select('territory')->where('team_manager_id',$id)->get(); 
            $device_type = DB::table('services')->select('device_type')->where('team_manager_id',$id)->get(); 
            $name = DB::table('team_members')->select('name')->where('team_manager_id',$id)->get(); 
            $assigned_sales_rep = DB::table('team_members')->select('name')->where('team_manager_id',$id)->get(); 
        }else if($admin->role_id == 3) {
            $current_user_team_manager_id = DB::table('team_members')->select('team_manager_id')->where('email', '=', $email)->first()->team_manager_id;
            $mem_id = DB::table('team_manager')->where('id',$id)->first();
            $role_id = DB::table('team_manager')->where('id',$mem_id->role_id)->first();
            $data = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->where('team_manager_id', '=', $current_user_team_manager_id)->get();
            $customer = DB::table('accounts')->select('customer')->where('team_manager_id',$role_id->id)->get(); 
            $department = DB::table('accounts')->select('department')->where('team_manager_id',$role_id->id)->get(); 
            $service = DB::table('services')->select('service')->where('team_manager_id',$role_id->id)->get(); 
            $task = DB::table('services')->select('task')->where('team_manager_id',$role_id->id)->get(); 
            $team_members = DB::table('team_members')->select('territory')->where('team_manager_id',$role_id->id)->get();
            $device_type = DB::table('services')->select('device_type')->where('team_manager_id',$role_id->id)->get(); 
            $name = DB::table('team_members')->select('name')->where('team_manager_id',$role_id->id)->get(); 
            $assigned_sales_rep = DB::table('team_members')->select('name')->where('team_manager_id',$role_id->id)->get();
        }
        // dd($data);

       // $data = Tasks::orderBy("assigned_sales_rep", "DESC")->get();
        $events = [];
        // $original_sales_rep = "";
        // $original_color_code = '#' . dechex(\rand(0, 16777215));
        $color_code_arr = [];
        for ($i = 4; $i < 10000; $i++) {
           array_push($color_code_arr, '#' . dechex((($i + 3) % 255) * (($i + 7) % 255) * (($i + 12) % 255) ));     
        }
        $index = 0;
        foreach ($data as $key => $value) {
            $color_code = $color_code_arr[$index++];
            $events[] = Calendar::event(
                $value->assigned_sales_rep,
                true,
                new \DateTime($value->start_time),
                new \DateTime($value->end_time . ' +1 day'),
                $value->id,
                // Add color and link on event
                [
                    'color' => $color_code == $value->assigned_sales_rep ? $color_code : $color_code,
                ]
            );
            $color_code = $value->assigned_sales_rep;
            $color_code = $color_code == $value->assigned_sales_rep ? $color_code : $color_code;
        }
        $calendar = Calendar::addEvents($events)
            ->setOptions([ //set fullcalendar options
                'firstDay' => 1,
                'defaultView' => 'agendaWeek',
                'contentHeight' => 700,
                'themeSystem' => 'bootstrap3',
                'columnHeader' => false,
                'aspectRatio' => 1
            ])->setCallbacks([
                'eventClick' => 'calendarEventClickHandler',
            ]);

        $tasks = Tasks::all();

        
        
        return view('dashboard.calendar', compact('calendar', 'customer', 'department', 'team_members', 'service','task', 'device_type', 'name', 'tasks'));
    }
    public function calendar_search(Request $request)
    {
      
        DB::enableQueryLog();

        $data =DB::table('tasks');
        $user_name = Auth::user()->name;
        $id = Auth::user()->id;
        $admin = DB::table('team_manager')->where('name',$user_name)->first();
        if($admin->role_id == 1){
            $data = DB::table('tasks')->select('tasks.*')->orderBy("assigned_sales_rep", "DESC");
        }else {
            $data = DB::table('tasks')->select('tasks.*')->where('team_manager_id',$id);
        }


        if($request->search) {
            $data = $data->where('customer','like',"%$request->search%");
        }
        if($request->service) {
            $data = $data->where('service','like',"%$request->service%");
        }
        if($request->date1) {
            $data = $data->whereRaw("Date(`start_time`) <= Date('$request->date1') and Date(`end_time`) >= Date('$request->date1')");
        }
        if($request->assigned_sales_rep) {
            $data = $data->where('assigned_sales_rep','like',"%$request->assigned_sales_rep%");
        }
        if($request->type) {
            $data = $data->leftJoin('team_manager','tasks.assigned_sales_rep', '=', 'team_manager.name')->leftJoin('team_members', 'team_manager.role_id', '=', 'team_members.team_manager_id')->where('team_members.territory',$request->territory);
        }
        if($request->customer) {
            $data = $data->where('customer','like',"%$request->customer%");
        }
     
        $data = $data->get();
        

               $events = [];
        foreach ($data as $key => $value) {
         
            $events[] = Calendar::event(
                $value->assigned_sales_rep,
                true,
                new \DateTime($value->start_time),
                new \DateTime($value->end_time . ' +1 day'),
                $value->id,
                // Add color and link on event
                [
                    'color' => '#2e488a',
                ]
            );
         
        }
        //dd($events);
        $calendar = Calendar::addEvents($events)
            ->setOptions([ //set fullcalendar options
                'firstDay' => 1,
                'contentHeight' => 700,
                'themeSystem' => 'bootstrap3',
                'columnHeader' => false,
                'aspectRatio' => 1
            ])->setCallbacks([
                'eventClick' => 'calendarEventClickHandler',
            ]);
          
        $tasks = Tasks::all();

        $customer = DB::table('accounts')->select('customer')->distinct()->get(); 
        $department = DB::table('accounts')->select('department')->distinct()->get();
        $service = DB::table('services')->select('service')->distinct()->get();
        $task = DB::table('services')->select('task')->distinct()->get();
        $team_members = DB::table('team_members')->select('territory')->distinct()->get();
        $device_type = DB::table('services')->select('device_type')->distinct()->get();
        $name = DB::table('team_members')->select('name')->distinct()->get();
        
        return view('dashboard.calendar', compact('calendar', 'task','team_members', 'customer', 'department', 'service', 'device_type', 'name', 'tasks'));
    }

    public function getEventDetail($event){
        $event = Tasks::find($event); 
        return $event;
    }
    public function postTaskUpdate(Request $request){
       //var_dump($request->all());exit;
        $id = $request->id;
        $customer = $request->customer;
        $department = $request->department;
        $service = $request->service;
        $task = $request->task;
        $device_type = $request->device_type;
        $start_time = $request->start_time;
        $end_time = $request->end_time;
        $assigned_sales_rep = $request->assigned_sales_rep;
        $status = $request->status;
        $notes = $request->notes;
        $update = DB::table('tasks')
                ->where('id',$id)
                ->update(['customer' => $customer, 
                            'department' => $department, 
                            'service' => $service, 
                            'task'=> $task, 
                            'device_type' => $device_type, 
                            'start_time' => $start_time,
                             'end_time' => $end_time, 
                             'assigned_sales_rep' => $assigned_sales_rep, 
                             'status' => $status,
                             'notes' => $notes
                             ]);
        // var_dump($request->all());
        \Session::flash('success', 'Data updated successfully.');
        return $update;
    }

    public function addEvent(Request $request)
    {
        //dd('task',$request->all());
        $validator = Validator::make($request->all(), [
            'start_time' => 'required',
            'end_time' => 'required',
            ]);

            if ($validator->fails()) {
                \Session::flash('warning', 'Please enter the valid details');
                return redirect()->back()->withInput()->withErrors($validator);
            }
            $email = Auth::user()->email;
            $user_name = Auth::user()->name;
            $admin = DB::table('team_manager')->where('name',$user_name)->first();
            $event = new Tasks;
            if($admin->role_id == 1 || $admin->role_id == 2){
                $event->team_manager_id = Auth::user()->id;
                }else{
                $event->team_manager_id = DB::table('team_members')->select('team_manager_id')->where('email', '=', $email)->first()->team_manager_id;
                }
            $event->customer = $request['customer'];
            $event->department = $request['department'];
            $event->service = $request['service'];
            $event->task = $request['task'];
            $event->device_type = $request['device_type'];
            $event->start_time = $request['start_time'];
            $event->end_time = $request['end_time'];
            $event->assigned_sales_rep = $request['assigned_sales_rep'];
            $event->status = $request['status'];
            $event->notes = $request['notes'];
            
          
            $event->save();
        
            \Session::flash('success', 'Event added successfully.');
            return Redirect::to('dashboard/calendar');
        }
    
    }
    