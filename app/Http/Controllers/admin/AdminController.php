<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use DB;
use App\Events;
use Calendar;
use App\Tasks;
use FarhanWazir\GoogleMaps\GMaps;
use App\Team;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class AdminController extends Controller
{

  public function index() {
      
    $role = Auth::user();
      $total_tasks = DB::table('tasks')->count();
      $complete_tasks = DB::table('tasks')->where('status', 'Complete')->count();
      $incomplete_tasks = DB::table('tasks')->where('status', 'Incomplete')->count();
      $ongoing_tasks = DB::table('tasks')->where('status', 'Inprogress')->count();
      $canceled_tasks = DB::table('tasks')->where('status', 'Canceled')->count();
      $unassigned_tasks = DB::table('tasks')->where('status', 'Unassigned')->count();

      /*** Calendar  ***/
        
        /********************************** Calendar Start **********************************************/
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
                $value->customer,
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
            'contentHeight' => 400,
            'defaultView' => 'agendaWeek',
            'color' => '#2e488a',
            'themeSystem' => 'standard',
            'aspectRatio' => 1,
            'eventLimit' => 3,
            'eventTextColor' => 'white',

        ])->setCallbacks([
            'eventClick' => 'calendarEventClickHandler',
        ]);

        /****Calendar End******/

        /**********Map *******/

        $config['center'] = 'Air Canada Centre, Toronto';
        $config['zoom'] = '2.8';
        $config['map_type'] = 'SATELLITE';
        $config['map_height'] = '500px';
        $config['scrollwheel'] = false;
        $user = Auth::user();

        /* $users = DB::table('team_manager')->where('id', $user->id)->get();
        dd($location = $users[0]->ipaddress);exit(); */

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

        // get all members
        // loop 
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
        
       // dd($member->id,$location_latlong);
        $map = $gmap->create_map();

        /************Map End***********/


     if ($role->role_id == 1){
        return view('admin/dashboard', compact('map', 'location', 'calendar', 'total_tasks', 'complete_tasks', 'incomplete_tasks', 'ongoing_tasks', 'canceled_tasks', 'unassigned_tasks'));
        
     }
     if($role->role_id == 2){
    
        return view('/dashboard');
     }
   }
}
