<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    $test = ['BikeID: ', 'Location: ', 'Active: ', 'Speed: ', 'Charging: ', 'Warning: ', 'City ID: '];
    return $test;
});

Route::get('/city', function () {
    return 'city';
});

Route::get('/stations', function () {
    return 'stations';
});

Route::get('/customers', function () {
    return 'customers';
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
