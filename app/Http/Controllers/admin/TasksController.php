<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Events;
use App\Tasks;
use App\Team;
use App\Accounts;
use DB;
use Redirect;
use Validator;
use App\Adminnotification;
use Auth;
use App\Events\Adminnotification as PusherAdminnotification;
use Mail;
use App\Mail\TaskSend;

class TasksController extends Controller
{
    public function index(Request $request){
    
        $events = Events::whereNotNull('id');

        $events = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->get();
        
        // dd($reps);
            $total_events = DB::table('tasks')->count();
            
            $complete_events = DB::table('tasks')->where('status', 'complete')->count();
            $incomplete_events = DB::table('tasks')->where('status', 'incomplete')->count();
            $inprogress_events = DB::table('tasks')->where('status', 'inprogress')->count();
            $canceled_events = DB::table('tasks')->where('status', 'canceled')->count();

            $tasks = DB::table('tasks')->get();
        /*********Customer, department from Accounts/Customer page */
        $customers = Accounts::all();
        $customer = DB::table('accounts')->select('customer')->distinct()->get(); 
        $department = DB::table('accounts')->select('department')->distinct()->get();
        $service = DB::table('services')->select('service')->distinct()->get();
        $task = DB::table('services')->select('task')->distinct()->get();
        $device_type = DB::table('services')->select('device_type')->distinct()->get();
        $name = DB::table('team_members')->select('name')->distinct()->get();

        return view('admin.tasks.index', compact('customers', 'customer', 'department', 'service','task', 'device_type', 'name', 'tasks', 'events', 'total_events', 'complete_events', 'incomplete_events', 'inprogress_events', 'canceled_events'));             
    }

    public function show($id)
    {
       $tasks = Tasks::find($id);
       return view('admin.tasks.show', compact('tasks'));
    }

    public function getTaskDetail($task){
        return Tasks::find($task);
    }

    public function destroy($id){

        Tasks::find($id)->delete();
        $tasks = Tasks::where('id',$id)->first();
        $team_members = Team::where('team_manager_id',Auth::user()->id)->get();
        foreach($team_members as $team_member){
            
            Mail::to($team_member->email)->send(new TaskSend($tasks));
            sleep(1);
        }
        $email = Auth::user()->email;
        $username=Auth::user()->name;
        $adminnotification = new Adminnotification([
            'message' => "$username removed the task ID = $id!",
            'email' => $email
        ]);
        $adminnotification->save();
        event(new PusherAdminnotification($adminnotification));
        
        return redirect()->back()->with('success', 'Task '.$id.' has been deleted Successfully');
    }
    public function getAssignedSalesRep($assigned_sales_rep){
        $id = Auth :: user()->id;
        $admin = Tasks::find($id);
        $assigned_sales_rep = DB :: table('team_members')->distinct()->pluck('assigned_sales_rep')->toArray();
        return view('/admin/tasks')->with('admin', $admin)->with('assigned_sales_rep', $assigned_sales_rep);
    }

    public function create(){
        $customer = DB :: table('accounts')->distinct()->pluck('customer')->toArray();
        $department = DB :: table('accounts')->distinct()->pluck('department')->toArray();
        $service = DB :: table('services')->distinct()->pluck('service')->toArray();
        $tasks = DB :: table('services')->distinct()->pluck('task')->toArray();
        $device_type = DB :: table('services')->distinct()->pluck('device_type')->toArray();
        $assigned_sales_rep = DB :: table('team_manager')->distinct()->pluck('name')->toArray();

        return view('admin/tasks/create', compact('customer', 'department', 'service', 'tasks', 'device_type', 'assigned_sales_rep'));
    }

    public function edit($id){
        $task  = Tasks::find($id);
        $customer = DB :: table('tasks')->distinct()->pluck('customer')->toArray();
        $department = DB :: table('tasks')->distinct()->pluck('department')->toArray();
        $service = DB :: table('tasks')->distinct()->pluck('service')->toArray();
        $tasks = DB :: table('tasks')->distinct()->pluck('task')->toArray();
        $device_type = DB :: table('tasks')->distinct()->pluck('device_type')->toArray();
        $assigned_sales_rep = DB :: table('tasks')->distinct()->pluck('assigned_sales_rep')->toArray();
        return view('admin.tasks.edit', compact('task', 'customer', 'department', 'service', 'tasks', 'device_type', 'assigned_sales_rep'));
    }
    
    public function store(Request $request){

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
                return Redirect::to('admin/tasks/create')->withInput()->withErrors($validator);
            }
       
        $tasks = new Tasks();

         $tasks->customer = $request->input('customer');
         $tasks->department = $request->input('department');
         $tasks->service = $request->input('service');
         $tasks->task = $request->input('task');
         $tasks->device_type = $request->input('device_type');
         $tasks->start_time = $request->input('start_time');
         $tasks->end_time = $request->input('end_time');
         $tasks->assigned_sales_rep = $request->input('assigned_sales_rep');
         $tasks->status = $request->input('status');
         $tasks->notes = $request->input('notes');
        //  dd(Auth::user()->id);
         $tasks->team_manager_id=Auth::user()->id;
         $tasks->save(); 
         
        $team_members = Team::where('team_manager_id', Auth::user()->id)->get();
        foreach($team_members as $team_member){
            
            Mail::to($team_member->email)->send(new TaskSend($tasks));
            sleep(1);
        }
        $email = Auth::user()->email;
        //dd($email);exit;
        $adminnotification = new Adminnotification([
            $name = Auth::user()->name,
            'message' => "$name Created a new task",
            'email' => $email
        ]);
        $adminnotification->save();
        event(new PusherAdminnotification($adminnotification));
         return Redirect::to("admin/tasks")->with('success', 'Great! New task has been added successfully.');
    }

    
    public function update(Request $request, $id){
    
        $validator = Validator::make($request->all(), [
            'customer'=>'required',
            'department'=> 'required',
            'service' => 'required',
            'task' => 'required',
            'device_type' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'assigned_sales_rep' => 'required',
            'status' => 'required',
            'notes' =>'required'
         ]);

        if ($validator->fails()) {
            \Session::flash('warning', 'Please enter the valid details');
            return Redirect::to('admin/userrole/create')->withInput()->withErrors($validator);
        }

        $tasks= Tasks::find($id);
         $tasks->customer =$request->get('customer');
         $tasks->department =$request->get('department');
         $tasks->service =$request->get('service');
         $tasks->task =$request->get('task'); 
         $tasks->device_type =$request->get('device_type'); 
         $tasks->start_time =$request->get('start_time');       
         $tasks->end_time =$request->get('end_time');
         $tasks->assigned_sales_rep =$request->get('assigned_sales_rep');
         $tasks->status =$request->get('status');         
         $tasks->notes =$request->get('notes');         
         $tasks->save();

        $team_members = Team::where('team_manager_id',Auth::user()->id)->get();
        foreach($team_members as $team_member){
            
            Mail::to($team_member->email)->send(new TaskSend($tasks));
            sleep(1);
        }
        $email = Auth::user()->email;
        $username = Auth::user()->name;
        //dd($email);exit;
        $adminnotification = new Adminnotification([
            'message' => "$username updated the Task Id = $id",
            'email' => $email
        ]);
        $adminnotification->save();
        event(new PusherAdminnotification($adminnotification));
         return redirect('/admin/tasks')->with('success', 'Great! Current service has been updated successfully.');
     }
}
