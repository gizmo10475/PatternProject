<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BikeController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\StationsController;
use App\Http\Controllers\ParkingZoneController;

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
Route::get("/city/{id}/bikes", [CityController::class, "getBikes"]);
Route::post("/city/{id}/bikes", [CityController::class, "addBike"]);
Route::get("/city/{id}/stations", [CityController::class, "getStations"]);
Route::get("/city/{id}/parking", [CityController::class, "getParking"]);

//stations routes
Route::get('/stations', [StationsController::class, 'index']);
Route::post('/stations', [StationsController::class, 'store']);
Route::get('/stations/{id}', [StationsController::class, 'show']);
Route::put('/stations/{id}', [StationsController::class, 'update']);
Route::delete('/stations/{id}', [StationsController::class, 'destroy']);


Route::get("/parking", [ParkingZoneController::class, "index"]);
Route::post("/parking", [ParkingZoneController::class, "create"]);
Route::post("/parking/bike", [ParkingZoneController::class, "parkBike"]);
Route::get("/parking/{id}/bikes", [ParkingZoneController::class, "getBikes"]);
Route::delete("/parking/bike", [ParkingZoneController::class, "unparkBike"]);

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
