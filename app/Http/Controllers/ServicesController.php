<?php
 
namespace App\Http\Controllers;
use App\Services;
use Redirect,Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
 
class ServicesController extends Controller
{
   public function index()
   {
      $services = Services::whereNotNull('id');
      $user_id = Auth::user()->id;

      $services = DB::table('services')->select('id', 'classification', 'service', 'task', 'device_type')->where('team_manager_id',$user_id)->get();
      return view('dashboard.services', compact('services'));
   }  
 
  public function addService(Request $request)
  {
         $services = new Services();
         $services->team_manager_id = Auth::user()->id;  
         $services->classification=$request->input('classification');
         $services->service=$request->input('service');
         $services->task=$request->input('task');
         $services->device_type=$request->input('device_type');
         $services->save(); 

          return Redirect::to("dashboard/services")->withSuccess('Great! New service has been added successfully.');

   }  

   public function update(Request $request)

      {                    
                  $id=$request->get('id');
                  $services = Services::find($id);
                
                  $services->classification = $request->get('classification');
                  $services->service = $request->get('service');
                  $services->task = $request->get('task');
                  $services->device_type = $request->get('device_type');
                  $services->save();    

               return redirect('/dashboard/services')->with('success', 'Great! Current service has been updated successfully.');
      }

      public function getServiceDetail($service){

         return Services::find($service);

      }

      public function removeService(Request $request){

         $id = $request->get('id');
         Services::find($id)->delete();

         return redirect()->back();
      }
      

}