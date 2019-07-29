<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Validator;
use Redirect;
use App\User;

class UserRoleController extends Controller
{
    public function index(){

        $users = DB::table('team_manager')->get();
        $team_members = DB::table('team_members')->get();
        
       
     return view('admin/UserRole/index', compact('users', 'team_members'));
    }

    public function create()
        {
        return view('admin/UserRole/create');
        }
    public function store(Request $request){
          $validator = Validator::make($request->all(), [
            'name'=>'required',
            'role'=> 'required',
            'email' => 'required | email|unique:team_manager,email',
            'phone' => 'required'
            ]);
           
            if ($validator->fails()) {
                \Session::flash('warning', 'Please enter the valid details');
                return Redirect::to('admin/userrole/create')->withInput()->withErrors($validator);
            }

          $team_manager = new User([
            'name' => $request->get('name'),
            'role_id'=> $request->get('role'),
            'email'=> $request->get('email'),
            'phone' => $request->get('phone')
          ]);
          $team_manager->save();
          return redirect('admin/userrole/')->with('success', 'User has been added');
   }

   public function edit($id)
    {
        $member = User::find($id);

        return view('admin/UserRole/edit', compact('member'));
    }
   public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name'=>'required',
            'role'=> 'required',
            'email' => 'required',
            'phone' => 'required'
            ]);

        if ($validator->fails()) {
            \Session::flash('warning', 'Please enter the valid details');
            return Redirect::to('admin/userrole/create')->withInput()->withErrors($validator);
        }

        $team_member = User::find($id);
        $team_member->name = $request->get('name');
        $team_member->role_id = $request->get('role');
        $team_member->email = $request->get('email');
        $team_member->phone = $request->get('phone');
        $team_member->save();

        return redirect('/admin/userrole')->with('success', 'User has been updated');
    }
    public function destroy($id)
        {
            $team_manager = User::find($id);
            $team_manager->delete();

          return redirect('admin/userrole/')->with('success', 'User has been deleted Successfully');
        }
    
}
