<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\customers;

class AdminController extends Controller
{
    /**
     * Display all customers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() //GET admin/customers
    {
        return customers::All();
    }

    /**
     * remove specific customer.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) //DELETE admin/customers/{id}
    {
        return customers::destroy($id);
    }
}
