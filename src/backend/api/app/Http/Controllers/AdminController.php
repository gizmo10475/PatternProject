<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Illuminate\Http\Response;
use App\Models\customers;

class AdminController extends Controller
{
    /**
     * Display all customers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response //GET admin/customers
    {
        return customers::All();
    }

    /**
     * remove specific customer.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): Response //DELETE admin/customers/{id}
    {
        return customers::destroy($id);
    }
}
