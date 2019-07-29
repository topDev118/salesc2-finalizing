<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Adminnotification;
class NotificationController extends Controller
{
    //
    public function index(){
        $notifications  = Adminnotification::where('is_read',0)->orderBy('updated_at', 'desc')->take(5)->get();

       //dd($notifications);
       return view('admin.adminHeader',compact('notifications'));
    }
    public function  show_all(){
        $notifications  = Adminnotification::get();
       
        Adminnotification::where('is_read', 0)->update(['is_read' => 1]);

        return view('admin.notification.notification',compact('notifications'));

    }

    public function remove($id)
    {
        $notifications = Adminnotification::find($id);
      
        $notifications->delete();

        return redirect()->back()->with('success', 'Notification removed successfuly.');

    }
}
