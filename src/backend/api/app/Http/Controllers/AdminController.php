<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Customer;

class AdminController extends Controller
{
    /**
     * Display all customers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse //GET admin/customers
    {
        return response()->json(["data" => Customer::All()]);
    }

    /**
     * remove specific customer.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): JsonResponse //DELETE admin/customers/{id}
    {
        return response()->json(["data" => Customer::destroy($id)]);
    }
}
