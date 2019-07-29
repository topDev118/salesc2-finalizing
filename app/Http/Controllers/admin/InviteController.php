<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Invite;
use App\Mail\InviteSend;
 
class InviteController extends Controller
{
        
    public function invite()
    {
        $invite = Invite::all();
    
        return view('admin.email_Invite.invite', compact('invite'));
    }

    public function sendemail(Request $request){
        //dd($request->email);
        if(Invite::where('email', $request->email)->first()){
            return redirect()->back()->with("error","You sent invite already!");
        }
        $emailsave = new Invite([
            'email' => $request->email,
            'token'=> md5(uniqid().mt_rand())
        ]);
        $emailsave->save();
        Mail::to( $request->email)->send(new InviteSend($emailsave));
        sleep(1);
        // return view('admin.invite.invite');
        return redirect()->back()->with("message","Sent Invite successfully!");
    }
    public function removeInvite(Request $request, $id){
       // dd($id);
        Invite::find($id)->delete();        
        return redirect()->back()->with('remove', 'Invite have been deleted successfully');
    }
}
