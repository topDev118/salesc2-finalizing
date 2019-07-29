<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Adminnotification;

class NotificationController extends Controller
{
    public function index(){
        $notifications  = Adminnotification::where('is_read',0)->orderBy('updated_at', 'desc')->take(5)->get();

       //dd($notifications);
       return view('admin.adminHeader', compact('notifications'));
    }
    public function  show_all(){
        $notifications  = Adminnotification::get();
        Adminnotification::where('is_read', 0)->update(['is_read' => 1]);
        //dd($notifications);
        return view('admin.notification.notification',compact('notifications'));

    }
}
