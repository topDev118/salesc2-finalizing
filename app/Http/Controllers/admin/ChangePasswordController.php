<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\User;
use Validator;
use Hash;
use Illuminate\Support\Facades\Redirect;



class ChangePasswordController extends Controller
{
    public function index(){
        return view('admin/ChangePassword/index');
    }

    public function admin_credential_rules(array $data)
    {
        $messages = [
            'current-password.required' => 'Please enter current password',
            'password.required' => 'Please enter password',
        ];

        $validator = Validator::make($data, [
            'current-password' => 'required',
            'password' => 'required|same:password',
            'password_confirmation' => 'required|same:password',     
        ], $messages);

        return $validator;
    }  

    public function postCredentials(Request $request)
        {
        if(Auth::Check())
        {
            $request_data = $request->All();
            $validator = $this->admin_credential_rules($request_data);
            if($validator->fails())
            {
            return Redirect::to('admin/changepassword')->withErrors($validator);
            }
            else
            {  
            $current_password = Auth::User()->password;           
            if(Hash::check($request_data['current-password'], $current_password))
            {           
                $user_id = Auth::User()->id;                       
                $obj_user = User::find($user_id);
                $obj_user->password = Hash::make($request_data['password']);;
                $obj_user->save(); 
                return redirect()->back()->with('success', 'Password has been changed successfully');
            }
            else
            {           
                $errorss = array('current-password' => 'Please enter correct current password');
                // return response()->json(array('error' => $error), 400);   
                return Redirect::to('admin/changepassword')->withErrors($errorss);
            }
            }        
        }
        else
        {
            return redirect()->to('/');
        }    
        }
}
