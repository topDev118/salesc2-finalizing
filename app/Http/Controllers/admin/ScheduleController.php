<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use Calendar;
use Validator;
use App\Events;
use App\Tasks;
use Illuminate\Support\Facades\DB;
class ScheduleController extends Controller
{
    public function index(Request $request)
    {
        $data = Tasks::orderBy("assigned_sales_rep", "DESC")->get();
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

        $customer = DB::table('accounts')->select('customer')->distinct()->get(); 
        $department = DB::table('accounts')->select('department')->distinct()->get();
        $service = DB::table('services')->select('service')->distinct()->get();
        $task = DB::table('services')->select('task')->distinct()->get();
        $device_type = DB::table('services')->select('device_type')->distinct()->get();
        $name = DB::table('team_members')->select('name')->distinct()->get();
        $assigned_sales_rep = DB::table('tasks')->select('assigned_sales_rep')->distinct()->get();
        
        return view('admin/Schedule/index', compact('calendar', 'customer', 'department', 'service','task', 'device_type', 'name', 'tasks'));
    }
    public function schedule_search(Request $request)
    {

        DB::enableQueryLog();
        $data =  DB::table('tasks');
        if($request->search) {
            $data = $data->where('customer','like',"%$request->search%");
        }
        if($request->service) {
            $data = $data->where('service','like',"%$request->service%");
        }
        if($request->date1) {
            $data = $data->where('start_time','like',"%$request->date1%");
        }
        if($request->assigned_sales_rep) {
            $data = $data->where('assigned_sales_rep','like',"%$request->assigned_sales_rep%");
        }
        if($request->task) {
            $data = $data->where('task',$request->task);
        }
        if($request->customer) {
            $data = $data->where('customer','like',"%$request->customer%");
        }
        $data = $data->get();

               $events = [];
        foreach ($data as $key => $value) {
            $events[] = Calendar::event(
                $value->customer,
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
        $device_type = DB::table('services')->select('device_type')->distinct()->get();
        $name = DB::table('team_members')->select('name')->distinct()->get();
        
        return view('admin.Schedule.index', compact('calendar', 'tasks', 'customer', 'department', 'service','task', 'device_type', 'name', 'tasks'));
    }

    public function getEventDetail($event){
        $event = Tasks::find($event); 
        return $event;
    }
    public function postTaskUpdate(Request $request){

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
                             'status' => $status
                             ]);

        \Session::flash('success', 'Data updated successfully.');
        return $update;
    }

    public function addEvent(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'customer' => 'required',
            'department' => 'required',
            'service' => 'required',
            'task' => 'required',
            'device_type' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'assigned_sales_rep' => 'required',
            'status' => 'required',
            ]);

            if ($validator->fails()) {
                \Session::flash('warning', 'Please enter the valid details');
                return Redirect::to('admin/schedule')->withInput()->withErrors($validator);
            }
            $event = new Tasks;
            $event->customer = $request['customer'];
            $event->department = $request['department'];
            $event->service = $request['service'];
            $event->task = $request['task'];
            $event->device_type = $request['device_type'];
            $event->start_time = $request['start_time'];
            $event->end_time = $request['end_time'];
            $event->assigned_sales_rep = $request['assigned_sales_rep'];
            $event->status = $request['status'];
          
            $event->save();
        
            \Session::flash('success', 'Event added successfully.');
            return Redirect::to('admin/schedule');
        }
    
    }
    

