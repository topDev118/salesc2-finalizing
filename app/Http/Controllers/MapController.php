<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use App\Team;
use DB;
use FarhanWazir\GoogleMaps\GMaps;

class MapController extends Controller
{


    public function index()
    {


        $config['center'] = 'Air Canada Centre, Toronto';
        $config['zoom'] = '2.8';
        $config['map_type'] = 'SATELLITE';
        $config['map_height'] = '600px';
        $config['scrollwheel'] = false;
        $user = Auth::user();


        $mylocation = json_decode(file_get_contents("http://ipinfo.io/$user->ipaddress/?key=" . env('IP_INFO_KEY')));
        $location = ($mylocation->region . ', ' . $mylocation->city);
        $gmap = new GMaps();
        list($my_latitude, $my_longitude) = explode(",", $mylocation->loc);
        $location_latlong = "$my_latitude,$my_longitude";

        $config["center"] = "$location_latlong";
        $gmap->initialize($config);
        $marker['position'] = $location_latlong;
        $marker['icon'] = asset('img/map_marker_red.png');
        $marker['onclick'] = "showTasksofMember($user->id)";
        /*********** Start Marker Setup ***********/
        $marker['infowindow_content'] = $location." ".$user->name;
        $gmap->add_marker($marker);


        $marker = [];
        // get all members
        // loop 
        $team_members = Team::all('id');
        

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
        return view('dashboard.map', compact('map','location'));
    }

    public function Mark_GetTaskMember($id)
    {
        $htmlString = "";

        
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
        
        foreach ($team_members as $teammember){
          
            
                $tasks = DB::table('tasks')->where('assigned_sales_rep', $teammember->name)->get();
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
       
        $team_members = DB::table('team_members')->where('latitude', $location_lat)->where('longitude', $location_long)->get();
        

        $htmlString .= "<div calss='justify-content-center table-responsive container-sales'>
                            <div class='col-md-auto' table-responsive>
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
