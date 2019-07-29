<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Notifications\UserRegisterSuccessfully;
use App\Invite;
use App\Team;
use Redirect,Response;
use Illuminate\Http\Request;
use Auth;
class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/welcome';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function accepted($token){
        $invite = Invite::where('token', $token)->first();
        if($invite){          
            if($invite->accepted == 1){
                return "Expired token or you are already registered";
            }
            $email = $invite->email;
            $name = explode("@",$email)[0];
            return view('auth.profilecomplete', compact('email','name'));
        }
    }
    public function member_accepted($id){
        $member = Team::find($id);
        $isExist = User::where('email',$member->email)->first();
        if($isExist){
            return "You already registered!";
        }else{
            return view('auth.team_memberprofilecomplete', compact('member'));
        }
    } 
    public function profilecomplete(Request $request, $token){
        // dd($request->all());
        $externalContent = file_get_contents('http://checkip.dyndns.com/');
        preg_match('/Current IP Address: \[?([:.0-9a-fA-F]+)\]?/', $externalContent, $m);
        
        $externalIp = $m[1];
        $ip = $_SERVER['REMOTE_ADDR'];
        $profile = User::where('email' ,$request->email)->first();
        //dd($profile->email);exit;
        if(isset($profile->email) == 'true'){
            //return "You already registered!";
            return redirect(route('login'))->with('flashMessage', 'You are already registered, Please login!');
        }else{
        $team_manager = new User([
            'role_id' =>2,
            'name' =>$request->username,
            'email' =>$request->email,
            'phone' =>$request->phone,
            'is_verify' => 1,
            'password'=> Hash::make($request->password),
            'ipaddress' => $ip == "127.0.0.1" ? $externalIp : $ip,
        ]);        
        $team_manager->save(); 
        }
        $invite = Invite::where('token', $token)->first();
        $invite->accepted = 1;
        $invite->save();
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];
    
        // Dump data
        // dd($credentials);
    
        if (Auth::attempt($credentials)) {
            return redirect()->route('dashboard');
        }
    }
    public function member_profilecomplete(Request $request, $id){
        //dd();
        $externalContent = file_get_contents('http://checkip.dyndns.com/');
        preg_match('/Current IP Address: \[?([:.0-9a-fA-F]+)\]?/', $externalContent, $m);
        //dd($request->email);exit();
        $externalIp = $m[1];
        $ip = $_SERVER['REMOTE_ADDR'];
        $profile = User::where('email' ,$request->email)->first();
        //dd(isset($profile->email));exit;
        if(isset($profile->email) == 'true'){
            
            //return "You already registered!";
            return redirect(route('login'))->with('flashMessage', 'You are already registered, Please login!');
        }else{
            //dd('none');
        $team_manager = new User([
            'role_id' =>3,
            'name' =>$request->username,
            'email' =>$request->email,
            'phone' =>$request->phone,
            'is_verify' => 1,
            'password'=> Hash::make($request->password),
            'ipaddress' => $ip == "127.0.0.1" ? $externalIp : $ip,
        ]);
        
        $team_manager->save();
        } 
       /*  $invite = Invite::where('token', $token)->first();
        $invite->accepted = 1;
        $invite->save(); */
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];
    
        // Dump data
        // dd($credentials);
    
        if (Auth::attempt($credentials)) {
            return redirect()->route('dashboard');
        }
    }
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:team_manager'],
            'phone' => ['required', 'string', 'min:11', 'unique:team_manager'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],

        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $externalContent = file_get_contents('http://checkip.dyndns.com/');
        preg_match('/Current IP Address: \[?([:.0-9a-fA-F]+)\]?/', $externalContent, $m);
        
        $externalIp = $m[1];
        $ip = $_SERVER['REMOTE_ADDR'];

        $user =  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'verify_token' => \uniqid(),
            'ipaddress' => $ip == "127.0.0.1" ? $externalIp : $ip,
            'password' => Hash::make($data['password']),
        ]);
        $user->notify(new UserRegisterSuccessfully($user));
        return $user;
    }
}
