<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\bikes;
use App\Models\cities;
use App\Models\accounts;
use App\Models\customers;
use App\Models\station2city;
use App\Models\stations;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/bike', function () {
    return bikes::All();
});

Route::get('/city', function () {
    return cities::All();
});

Route::get('/stations', function () {
    return stations::All();
});

Route::get('/customers', function () {
    return customers::All();
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
