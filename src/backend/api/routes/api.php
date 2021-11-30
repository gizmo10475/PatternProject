<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BikeController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\StationsController;

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

//bike routes
Route::get('/bike', [BikeController::class, 'index']);
// Route::post('/bike', [BikeController::class, 'store']);
Route::get('/bike/{id}', [BikeController::class, 'show']);
Route::put('/bike/{id}', [BikeController::class, 'update']);
Route::delete('/bike/{id}', [BikeController::class, 'destroy']);


//city routes
Route::get('/city', [CityController::class, 'index']);
Route::post('/city', [CityController::class, 'store']);
Route::get('/city/{id}', [CityController::class, 'show']);
Route::put('/city/{id}', [CityController::class, 'update']);
Route::delete('/city/{id}', [CityController::class, 'destroy']);


//stations routes
Route::get('/stations', [StationsController::class, 'index']);
Route::post('/stations', [StationsController::class, 'store']);
Route::get('/stations/{id}', [StationsController::class, 'show']);
Route::put('/stations/{id}', [StationsController::class, 'update']);
Route::delete('/stations/{id}', [StationsController::class, 'destroy']);


///////////////////////////////// Auth in progress

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/bike', [BikeController::class, 'store']);
});

/////////////////////////////////


//customer routes
Route::get('/customer', [CustomerController::class, 'index']);
// Route::post('/customer', [CustomerController::class, 'store']);
Route::get('/customer/{id}', [CustomerController::class, 'show']);
Route::put('/customer/{id}', [CustomerController::class, 'update']);
Route::delete('/customer/{id}', [CustomerController::class, 'destroy']);
//customer history
Route::get('/customer/{id}/history', [CustomerController::class, 'showHistory']);
Route::post('/customer/{id}/history', [CustomerController::class, 'storeHistory']);

//register
Route::post('/register', [AuthController::class, 'register']);

//admin routes
Route::get('/admin/customers', [AdminController::class, 'index']);
Route::delete('/admin/customers/{id}', [AdminController::class, 'destroy']);
