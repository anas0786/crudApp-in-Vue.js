<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Jwt
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try{
            $user = JWTAuth::parseToken()->authenticate();
        }catch(Exception $e)
        {
            if($e instanceof TokenExpiredException)
            {
                $token= JWTAuth::refresh(JWTAuth::getToken());
                return response()->json(['sucess'=>false,'token'=>$token,'message'=>"token expired"],401);
            }else if($e instanceof TokenInvalidException)
            {
                return response()->json(['sucess'=>false,'message'=>"token invalid"],401);
            }
            else {
                return response()->json(['sucess'=>false,'message'=>"token not found"],401);
            }
        }
        return $next($request);
    }
}
