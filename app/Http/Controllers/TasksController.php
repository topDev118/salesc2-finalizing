<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

        $tasks = Tasks::whereNotNull('id');
        $user_name = Auth::user()->name;
        $id = Auth::user()->id;
        $email = Auth::user()->email;
        $admin = DB::table('team_manager')->where('name',$user_name)->first();
        $mem_id = DB::table('team_manager')->where('id',$id)->first();
        $role_id = DB::table('team_manager')->where('id',$mem_id->role_id)->first();
        $manager_name = DB::table('team_manager')->select('name')->where('id',$role_id->id)->first();
        if($admin->role_id == 1){
            $events = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->get();
            $name = DB::table('team_members')->select('name')->get();
            $customer = DB::table('accounts')->select('customer')->get(); 
            $department = DB::table('accounts')->select('department')->get();
            $service = DB::table('services')->select('service')->get();
            $task = DB::table('services')->select('task')->get();
            $device_type = DB::table('services')->select('device_type')->get();
            $start_time = DB::table('services')->select('device_type')->get();
            $end_time = DB::table('tasks')->select('end_time')->get();
        }else if($admin->role_id == 2) {
            $events = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->where('team_manager_id', '=', $id)->get();
            $name = DB::table('team_members')->select('name')->where('team_manager_id', $id)->get();
            $customer = DB::table('accounts')->select('customer')->where('team_manager_id', $id)->get(); 
            $department = DB::table('accounts')->select('department')->where('team_manager_id', $id)->get();
            $service = DB::table('services')->select('service')->where('team_manager_id', $id)->get();
            $task = DB::table('services')->select('task')->where('team_manager_id', $id)->get();
            $device_type = DB::table('services')->select('device_type')->where('team_manager_id', $id)->get();
            $start_time = DB::table('services')->select('device_type')->where('team_manager_id', $id)->get();
            $end_time = DB::table('tasks')->select('end_time')->where('team_manager_id', $id)->get();
            // dd($name);
        }else if($admin->role_id == 3) {
            
            $current_user_team_manager_id = DB::table('team_members')->select('team_manager_id')->where('email', '=', $email)->first()->team_manager_id;
            $events = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->where('team_manager_id', '=', $current_user_team_manager_id)->get();
            $name = DB::table('team_members')->select('name')->where('team_manager_id',$role_id->id)->get();
            $customer = DB::table('accounts')->select('customer')->where('team_manager_id',$role_id->id)->get(); 
            $department = DB::table('accounts')->select('department')->where('team_manager_id',$role_id->id)->get();
            $service = DB::table('services')->select('service')->where('team_manager_id',$role_id->id)->get();
            $task = DB::table('services')->select('task')->where('team_manager_id',$role_id->id)->get();
            $device_type = DB::table('services')->select('device_type')->where('team_manager_id',$role_id->id)->get();
            $start_time = DB::table('services')->select('device_type')->where('team_manager_id',$role_id->id)->get();
            $end_time = DB::table('tasks')->select('end_time')->where('team_manager_id',$role_id->id)->get();
        }
            $total_events =  $events->count();
            
            $complete_events = $events->where('status', 'Complete')->count();
            $incomplete_events = $events->where('status', 'Incomplete')->count();
            $inprogress_events = $events->where('status', 'Inprogress')->count();
            $canceled_events = $events->where('status', 'Canceled')->count();

            $tasks = DB::table('tasks')->get();
            $customers = Accounts::all();       
        
       
           
            
            // dd($name);
            return view('dashboard.tasks', compact('manager_name','user_name', 'customers', 'customer', 'department', 'service','task', 'device_type', 'name', 'tasks', 'events', 'total_events', 'complete_events', 'incomplete_events', 'inprogress_events', 'canceled_events'));             
    }

    public function getTaskDetail($task){
        return Tasks::find($task);
    }

    public function removeTask(Request $request){
        $id = $request->get('id');        
        $tasks = Tasks::where('id',$id)->first();
        
        $email = Auth::user()->email;
        $adminnotification = new Adminnotification([
            'message' => "Task Id = $id is Deleted!",
            'email' => $email
        ]);
        $adminnotification->save();
        event(new PusherAdminnotification($adminnotification));
        Tasks::find($id)->delete();
        return redirect()->back();
    }
    public function getAssignedSalesRep($assigned_sales_rep){
        $id = Auth :: user()->id;
        $admin = Tasks::find($id);
        $assigned_sales_rep = DB :: table('team_members')->distinct()->pluck('assigned_sales_rep')->toArray();
        return view('/dashboard/tasks')->with('admin', $admin)->with('assigned_sales_rep', $assigned_sales_rep);
    }

    public function addTask(Request $request){
        $user_name = Auth::user()->name;
        $id = Auth::user()->id;
        
        $admin = DB::table('team_manager')->where('name',$user_name)->first();
        
        $tasks = new Tasks();
        if($admin->role_id == 3){
            $tasks->team_manager_id = $admin->role_id;
            
        }else{
            $tasks->team_manager_id = Auth::user()->id;
        }
        
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
         $tasks->save(); 
         
        $team_members = Team::where('team_manager_id',Auth::user()->id)->get();
        foreach($team_members as $team_member){
            
            Mail::to($team_member->email)->send(new TaskSend($tasks));
            //sleep(2);
        }
        $email = Auth::user()->email;
        $adminnotification = new Adminnotification([
            'message' => "Task Id = $tasks->id is Placed!",
            'email' => $email
        ]);
        $adminnotification->save();
        event(new PusherAdminnotification($adminnotification));
         return Redirect::to("dashboard/tasks")->withSuccess('Great! New task has been added successfully.');
    }
    public function postTaskUpdate(Request $request){
         $id = $request->get('id');
    
         $tasks= Tasks::find($id);
         $tasks->team_manager_id = Auth::user()->id;
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
         \Session::flash('success', 'Data updated successfully.');
        $team_members = Team::where('team_manager_id',Auth::user()->id)->get();
        foreach($team_members as $team_member){
            
            Mail::to($team_member->email)->send(new TaskSend($tasks));
            //sleep(2);
        }
        $email = Auth::user()->email;
        $adminnotification = new Adminnotification([
            'message' => "Task Id = $id is Deleted!",
            'email' => $email
        ]);
        $adminnotification->save();
        event(new PusherAdminnotification($adminnotification));
         return redirect('/dashboard/tasks')->with('success', 'Great! Current Task has been updated successfully.');
     }
}
