<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
class AdminChecked
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //dd($next);
        //dd($role_id = Auth::user());
        
        $role_id = Auth::user();
        if($role_id == Null ){
            return redirect('/login');
        }else{
            $role_id = Auth::user()->role_id;
        if ($role_id == 1){
            return $next($request);
        }else {
            return redirect('/dashboard');
        }
        }
        
    }
}
