<?php
 
namespace App\Http\Controllers;
use App\Accounts;
use Redirect,Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Validator;

 
class AccountsController extends Controller
{
   public function index()
   {
    
      $accounts = Accounts::whereNotNull('id');
      $user_id = Auth::user()->id;

      $accounts = DB::table('accounts')->select('id', 'customer', 'department', 'address', 'city', 'state', 'pocname', 'phone', 'email')->where('team_manager_id', $user_id)->get();
      return view('dashboard.accounts', compact('accounts'));
   }  
 
  public function addAccount(Request $request)
   {          
         $validator = Validator::make($request->all(), [
            'customer' => 'required',
            'city' => 'required',
            'state' => 'required',
            ]);

            if ($validator->fails()) {
                \Session::flash('warning', 'Please enter the valid details');
                return Redirect::to('dashboard/accounts')->withInput()->withErrors($validator);
            }
       
         
         $accounts = new Accounts();
         $accounts->team_manager_id = Auth::user()->id;            
         $accounts->customer=$request->input('customer');
         $accounts->department=$request->input('department');
         $accounts->address=$request->input('address');
         $accounts->latitude = $request->input('add_account_lat'); 
         $accounts->longitude = $request->input('add_account_lng');
         $accounts->city=$request->input('city');
         $accounts->state=$request->input('state');
         $accounts->pocname=$request->input('pocname');
         $accounts->phone=$request->input('phone');
         $accounts->email=$request->input('email');
         $accounts->save();
         return Redirect::to("dashboard/accounts")->with('success', 'Great! New Account has been added successfully.');
   }

      public function update(Request $request)

      {                    
                  $id=$request->get('id');
                  $accounts = Accounts::find($id);
                
                  $accounts->customer = $request->get('customer');
                  $accounts->department = $request->get('department');
                  $accounts->address = $request->get('address');
                  $accounts->latitude = $request->get('edit_account_lat'); 
                  $accounts->longitude = $request->get('edit_account_lng');
                  $accounts->city = $request->get('city');
                  $accounts->state = $request->get('state');
                  $accounts->pocname = $request->get('pocname');
                  $accounts->phone = $request->get('phone'); 
                  $accounts->email = $request->get('email'); 
                  $accounts->save();    

               return redirect('/dashboard/accounts')->with('success', 'Great! New account has been updated successfully.');
      }

      public function getAccountDetail($accounts){
         return Accounts::find($accounts);
      }
      public function removeAccount(Request $request){
         
        $id = $request->get('id');
        Accounts::find($id)->delete();
        return redirect()->back();
      }
}