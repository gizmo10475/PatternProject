<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
    public function index() //GET customer
    {
        return customers::All();
    }

    /**
     * Display specific customer.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) //GET customer/{id}
    {
        return customers::find($id);
    }

    /**
     * Update specific customer.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) //PUT customer/id
    {
        $customer = customers::find($id);
        $customer->update($request->all());
        return $customer;
    }

    /**
     * Display all history from specific customer.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showHistory($id) //GET customer/{id}/history
    {
        return customerHistory::where('customer', $id)->get();
    }

    /**
     * Store new history to specific customer.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeHistory(Request $request) //POST customer/{id}/history
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'customer' => 'required',
            'bike' => 'required',
            'start_location' => 'required',
            'start_time' => 'required',
            'end_location' => 'required',
            // 'end_time' => 'required',
            'cost' => 'required',
            'city' => 'required',
        ]);
        return customerHistory::create($request->all());
    }

    /**
     * Store a new customer.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeCustomer(Request $request) //POST customer/{id}/history
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'email' => 'required',
            // 'account' => 'required' //this should not be here /Eddie.
            // need to also add a row in 'customer'. /Eddie.
        ]);
        return accounts::create($request->all());
    }
}
