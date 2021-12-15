<?php

namespace App\Http\Middleware;

use App\Models\Account;
use App\Models\Customer;
use Illuminate\Database\Eloquent\ModelNotFoundException;
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
    public function handle(Request $request, \Closure $next): \Closure | JsonResponse
    {
        $requestingCustomerId = $request->route("id");
        $customer = null;
        try {
            $customer = Customer::findOrFail($requestingCustomerId);
        } catch (ModelNotFoundException $e) {
            error_log($e->getMessage());
            return response()->json(["error" => "Customer not found"], 404);
        }
        $account = $customer->ownedBy;
        $tokenHolderId = auth("sanctum")->user()->id;
        $tokenHolder = null;

        try {
            $tokenHolder = Account::findOrFail($tokenHolderId);
        } catch (ModelNotFoundException $e) {
            error_log($e->getMessage());
            return response()->json(["error" => "No account associated with your token"], 404);
        }

        if ($tokenHolder->admin || $account->id == $tokenHolderId) {
            return $next($request);
        }
        return response()->json(["error" => "You're not allowed to access someone elses data"], 403);
    }
}
