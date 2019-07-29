<?php

namespace App\Http\Middleware;

use Closure;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next, ... $roles)
    {
        
        
        foreach($roles as $role) {
            // Check if user has the role This check will depend on how your roles are set up
            
            if($request->user()->role_id == $role)
                return $next($request);
        }
        return abort(404);
    }

    private function getRequiredRoleForRoute($route)
    {
        $actions = $route->getAction();

        return isset($actions['roles']) ? $actions['roles'] : null;
    }
}
