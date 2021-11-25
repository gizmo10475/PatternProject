<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\customers;
use App\Models\customerHistory;
use App\Models\accounts;


class CustomerController extends Controller
{
    /**
     * Display all customers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse //GET customer
    {
        return response()->json(["data" => customers::All()]);
    }

    /**
     * Display specific customer.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): JsonResponse //GET customer/{id}
    {
        return response()->json(["data" => customers::find($id)]);
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
        $customer = customers::find($id);
        $customer->update($request->all());
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
        $history = customerHistory::where('customer', $id)->get();
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
            "data" => customerHistory::create($request->all())
        ]);
    }

    /**
     * Store a new customer.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeCustomer(Request $request): JsonResponse //POST customer/{id}/history
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'name' => 'required',
            'email' => 'required',
        ]);
        return response()->json([
            "data" => customers::create($request->all())
        ]);;
    }


    /**
     * Remove a specific customer account.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): JsonResponse //DELETE customer/{id}
    {
        return response()->json(["data" => customers::destroy($id)]);
    }



    // /**
    //  * Store a new customer.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
    //  */
    // public function storeCustomer(Request $request) //POST customer/{id}/history
    // {
    //     $request->validate([ //this needs to be in 'body' to get posted.
    //         'name' => 'required',
    //         'account' => 'required' //this should not be here /Eddie.
    //     ]);
    //     return customers::create($request->all());
    // }

}
