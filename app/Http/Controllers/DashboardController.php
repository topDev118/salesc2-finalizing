<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
USE Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use Calendar;
use Validator;
use App\Tasks;
use App\User;
use Auth;
use App\Team;

use Illuminate\Support\Facades\DB;
use FarhanWazir\GoogleMaps\GMaps;
class DashboardController extends Controller
{
    public function index () 
    {
       
        $schedule = Tasks::whereNotNull('id');
        $user_name = Auth::user()->name;
        $id = Auth::user()->id;
        $email = Auth::user()->email;
        $_SESSION['userinfo']['id']=Auth::user()->id;

        $admin = DB::table('team_manager')->where('name',$user_name)->first();
        if($admin->role_id == 1){
            $schedule = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->get();
        }else if($admin->role_id == 2) {
            $schedule = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->where('team_manager_id', $id)->get();
        }else if($admin->role_id == 3) {
            
            $current_user_team_manager_id = DB::table('team_members')->select('team_manager_id')->where('email', '=', $email)->first()->team_manager_id;
           
            $team_manager = DB::table('team_manager')->where('id',$admin->role_id)->first();
            $schedule = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->where('team_manager_id', '=', $current_user_team_manager_id)->get();
        }
       
        /*** Calendar  ***/
          
          /********************************** Calendar Start **********************************************/

        $data = Tasks::whereNotNull('id');
        $user_name = Auth::user()->name;
        $admin = DB::table('team_manager')->where('name',$user_name)->first();
        if($admin->role_id == 1){
            $data = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->orderBy("assigned_sales_rep", "DESC")->get();
            $total_tasks = DB::table('tasks')->count();
            $assigned_rep_sales_count = DB::table('tasks')->distinct()->count('assigned_sales_rep');
            $complete_tasks = DB::table('tasks')->where('status','Complete')->count();
            $incomplete_tasks = DB::table('tasks')->where('status',  'Incomplete')->count();
            $inprogress_tasks = DB::table('tasks')->where('status',  'Inprogress')->count();
            $canceled_tasks = DB::table('tasks')->where('status',  'Canceled')->count();

        }else if($admin->role_id == 2) {
            $data = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->where('team_manager_id', $id)->get();
            $total_tasks = DB::table('tasks')->where('team_manager_id', $id)->count();
            $assigned_rep_sales_count = DB::table('tasks')->distinct()->where('team_manager_id', $id)->count('assigned_sales_rep');
            $complete_tasks = DB::table('tasks')->where('status','Complete')->where('team_manager_id', $id)->count();
            $incomplete_tasks = DB::table('tasks')->where('status',  'Incomplete')->where('team_manager_id', $id)->count();
            $inprogress_tasks = DB::table('tasks')->where('status',  'Inprogress')->where('team_manager_id', $id)->count();
            $canceled_tasks = DB::table('tasks')->where('status',  'Canceled')->where('team_manager_id', $id)->count();
        }else if($admin->role_id == 3) {
            $data = DB::table('tasks')->select('id', 'customer', 'department', 'service', 'task', 'device_type', 'start_time', 'end_time', 'assigned_sales_rep', 'status', 'notes')->where('team_manager_id', '=', $current_user_team_manager_id)->get();
            /*********** Reporting Start ***********/
            $total_tasks = DB::table('tasks')->where('team_manager_id', '=', $current_user_team_manager_id)->count();
            $assigned_rep_sales_count = DB::table('tasks')->where('team_manager_id', '=', $current_user_team_manager_id)->distinct()->count('assigned_sales_rep');
            $complete_tasks = DB::table('tasks')->where('status','Complete')->where('team_manager_id', '=', $current_user_team_manager_id)->count();
            $incomplete_tasks = DB::table('tasks')->where('status',  'Incomplete')->where('team_manager_id', '=', $current_user_team_manager_id)->count();
            $inprogress_tasks = DB::table('tasks')->where('status',  'Inprogress')->where('team_manager_id', '=', $current_user_team_manager_id)->count();
            $canceled_tasks = DB::table('tasks')->where('status',  'Canceled')->where('team_manager_id', '=', $current_user_team_manager_id)->count();
            /*********** Reporting End ***********/
        }
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
  
          /*******************Calendar Event Management************/
          $calendar = Calendar::addEvents($events)
          ->setOptions([ //set fullcalendar options
              'firstDay' => 1,
              'editable' => true,
              'contentHeight' => 250,
              'defaultView' => 'agendaWeek',
              'color' => '#2e488a',
              'themeSystem' => 'standard',
              'aspectRatio' => 1,
              'eventLimit' => 3,
              'eventTextColor' => 'white',
  
          ])->setCallbacks([
              'eventClick' => 'calendarEventClickHandler',
          ]);
  
        
        // /**************************Google Map***********************/
         
         
       
        $config['center'] = 'Air Canada Centre, Toronto';
        $config['zoom'] = '2.8';
        $config['map_type'] = 'SATELLITE';
        $config['map_height'] = '100%';
        $config['scrollwheel'] = false;
        $user = Auth::user();


        $mylocation = json_decode(file_get_contents("http://ipinfo.io/$user->ipaddress/?key=" . env('IP_INFO_KEY')));
        $location = ($mylocation->region . ', ' . $mylocation->city);
        $gmap = new GMaps();
        list($my_latitude, $my_longitude) = explode(",", $mylocation->loc);
        $location_latlong = "$my_latitude,$my_longitude";
        //dd($location_latlong);
        $config["center"] = "$location_latlong";
        $gmap->initialize($config);
        $marker['position'] = $location_latlong;
        $marker['icon'] = asset('img/map_marker_red.png');
        $marker['onclick'] = "showTasksofMember($user->id)";
        /*********** Start Marker Setup ***********/
        $marker['infowindow_content'] = $location." ".$user->name;
        $gmap->add_marker($marker);


        $marker = [];

        
        $team_members = Team::all('id');
        
        // $user_id = Auth::user()->id;

        $team_members = DB::table('team_members')->get();
        
      
        foreach ($team_members as $member) {
            $marker['onclick'] = "showTasksofMember_member($member->id)";
            if ($member->latitude && $member->longitude) {
                $location_latlong = "$member->latitude,$member->longitude";
                
                $marker['position'] = $location_latlong;
                $marker['icon'] = asset('img/map_marker_blue.png');         
                $marker['infowindow_content'] = $member->region;
                $gmap->add_marker($marker);
            }
            
        }
        
        $map = $gmap->create_map();
        return view('dashboard/index', compact('schedule', 'calendar', 'map', 'location', 'total_tasks', 'assigned_rep_sales_count', 'complete_tasks', 'incomplete_tasks', 'inprogress_tasks', 'canceled_tasks' )) ;
    }   

    public function Mark_GetTask($id)
    {
        $htmlString = "";

        $user = Auth::user();//current user
        $mylocation = json_decode(file_get_contents("http://ipinfo.io/$user->ipaddress/?key=" . env('IP_INFO_KEY')));//user's Region, country, city from IPaddress
    
        $location = ($mylocation->region . ', ' . $mylocation->city); //current user's Region and City
       
        $gmap = new GMaps(); //Generate Map

        list($my_latitude, $my_longitude) = explode(",", $mylocation->loc);

        $location_lat = "$my_latitude"; // get current user's location latitude
        $location_long = "$my_longitude"; //get current user's location longtitude
       
       //team_member's info same as current user's latitude&longitude.
        // $team_members = DB::table('team_members')->where('team_manager_id', $id)->where('latitude', $location_lat)->where('longitude', $location_long)->get();
        $team_members = DB::table('team_members')->where('latitude', $location_lat)->where('longitude', $location_long)->get();
        // dd($team_members);exit;

        $htmlString .= "<div calss='justify-content-center table-responsive container-sales'>
                            <div class='col-md-auto table-responsive'>
                            <table id='datatable' class='table table-striped table-bordered' style='color:black;font-family:'sans-serif''>
                            <thead>
                            <tr style='color:#fff;'>
                                <th class='col'>Customer</th>
                                <th class='col'>Department</th>
                                <th class='col'>Service</th>
                                <th class='col'>Task</th>
                                <th class='col'>Device Type</th>
                                <th class='col'>Start Time</th>
                                <th class='col'>End Time</th>
                                <th class='col'>Assigned Sales Rep</th>
                                <th class='col'>Status</th>
                            </tr>
                            </thead>
                            <tbody>";

        foreach ($team_members as  $team_member) {
         
            $tasks = DB::table('tasks')->where('assigned_sales_rep', $team_member->name)->get();
           // dd($team_members);exit;
            foreach ($tasks as $task) {
                
                $htmlString .=         "<tr style='background:#2e488a;'>    
                                            <td class='col' style='color:white;'>$task->customer</td>
                                            <td class='col' style='color:white;'>$task->department</td>
                                            <td class='col' style='color:white;'>$task->service</td>
                                            <td class='col' style='color:white;'>$task->task</td>
                                            <td class='col' style='color:white;'>$task->device_type</td>
                                            <td class='col' style='color:white;'>$task->start_time</td>
                                            <td class='col' style='color:white;'>$task->end_time</td>
                                            <td class='col' style='color:white;'>$task->assigned_sales_rep</td>
                                            <td class='col' style='color:white;'>$task->status</td>
                                        </tr>";
                                    }
                                     
                           
        }
        $htmlString .=  "</tbody>                
                        </table>
                    </div>
                </div>";
                
        return $htmlString;
    }
    public function Mark_GetTaskMember($id)
    {
        $htmlString = "";
        //dd($id);

        
        $htmlString .= "<div calss='justify-content-center table-responsive container-sales'>
                            <div class='col-md-auto table-responsive'>
                            <table id='datatable' class='table table-striped table-bordered' style='color:black;font-family:'sans-serif''>
                            <thead>
                                <tr style='color:#fff;'>
                                <th class='col'>Customer</th>
                                <th class='col'>Department</th>
                                <th class='col'>Service</th>
                                <th class='col'>Task</th>
                                <th class='col'>Device Type</th>
                                <th class='col'>Start Time</th>
                                <th class='col'>End Time</th>
                                <th class='col'>Assigned Sales Rep</th>
                                <th class='col'>Status</th>
                            </tr>
                            </thead>
                            <tbody>";

        
        $team_member_id = DB::table('team_members')->where('id', $id)->first();
     

        $team_members = DB::table('team_members')->where('latitude', $team_member_id->latitude)->where('longitude', $team_member_id->longitude)->get();
        //$team_members = DB::table('team_members')->where('region', $team_member_id->region)->get(); //same region tasks.
        
        foreach ($team_members as $teammember){
            // $team_member = DB::table('team_members')->where('id', $teammember->id)->first();
            
            // foreach ($team_members as  $team_member) {
            
                $tasks = DB::table('tasks')->where('assigned_sales_rep', $teammember->name)->get();
                // dd($tasks);
                foreach ($tasks as $task) {
                    
                    $htmlString .= "        <tr style='background:#2e488a;'>    
                                                    <td class='col' style='color:white;'>$task->customer</td>
                                                    <td class='col' style='color:white;'>$task->department</td>
                                                    <td class='col' style='color:white;'>$task->service</td>
                                                    <td class='col' style='color:white;'>$task->task</td>
                                                    <td class='col' style='color:white;'>$task->device_type</td>
                                                    <td class='col' style='color:white;'>$task->start_time</td>
                                                    <td class='col' style='color:white;'>$task->end_time</td>
                                                    <td class='col' style='color:white;'>$task->assigned_sales_rep</td>
                                                    <td class='col' style='color:white;'>$task->status</td>
                                    </tr>";
                                }
        }
        

        $htmlString .=  "</tbody>                
                        </table>
                    </div>
                </div>";
        return $htmlString;
    }

}
