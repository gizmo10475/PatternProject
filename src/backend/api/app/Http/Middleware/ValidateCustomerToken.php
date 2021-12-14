<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ValidateCustomerToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next): Closure | JsonResponse
    {
        $requestingCustomerId = $request->route("id");
        $tokenHolderId = auth("sanctum")->user()->id;
        if ($requestingCustomerId != $tokenHolderId) {
            return response()->json(["error" => "You're not allowed to access someone elses data"], 403);
        }

        return $next($request);
    }
}
