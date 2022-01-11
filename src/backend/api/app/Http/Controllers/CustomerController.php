<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Customer;
use App\Models\History;

class CustomerController extends Controller
{
    /**
     * Display all customers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse //GET customer
    {
        $customers = Customer::All();
        foreach ($customers as $customer) {
            $customer->email = $customer->ownedBy->email;
            $customer->unsetRelation("ownedBy");
        }

        return response()->json(["data" => $customers]);
    }

    /**
     * Display specific customer.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): JsonResponse //GET customer/{id}
    {
        $customer = Customer::find($id);
        $customer->email = $customer->ownedBy->email;
        $customer->unsetRelation("ownedBy");
        return response()->json(["data" => $customer]);
    }

    /**
     * Update specific customer.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id): JsonResponse //PUT customer/id
    {
        $customer = Customer::find($id);
        $account = Account::find($customer->account);

        $account->update(["email" => $request->input("email", $account->email)]);
        $customer->update([
            "name" => $request->input("name", $customer->name),
            "credits" => $request->input("credits", $customer->credits)
        ]);
        $customer->save();
        $account->save();

        $customer->email = $account->email;
        return response()->json(["data" => $customer]);
    }

    /**
     * Display all history from specific customer.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showHistory(int $id): JsonResponse //GET customer/{id}/history
    {
        $history = History::where('customer', $id)->get();
        return response()->json(["data" => $history]);
    }

    /**
     * Store new history to specific customer.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeHistory(Request $request): JsonResponse //POST customer/{id}/history
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'customer' => 'required',
            'bike' => 'required',
            'start_longitude' => 'required',
            'start_latitude' => 'required',
            'start_time' => 'required',
            // 'end_time' => 'required',
            'cost' => 'required',
            'end_longitude' => 'required',
            'end_latitude' => 'required',
            'city' => 'required',
        ]);
        return response()->json([
            "data" => History::create($request->all())
        ], 201);
    }

    /**
     * Remove a specific customer account.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): JsonResponse //DELETE customer/{id}
    {
        return response()->json(["data" => Customer::destroy($id)]);
    }
}
