<?php

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

Route::post('/register', [AuthController::class, 'register']);

// Gemensamma routes
Route::middleware(["auth:sanctum", "ability:client,customer,admin"])
    ->group(function () {
        Route::get('/bike', [BikeController::class, 'index']);
        Route::get('/bike/{id}', [BikeController::class, 'show']);
        Route::get('/city', [CityController::class, 'index']);
        Route::get('/city/{id}', [CityController::class, 'show']);
        Route::get("/city/{id}/bikes", [CityController::class, "getBikes"]);
        Route::get("/city/{id}/stations", [CityController::class, "getStations"]);
        Route::get("/city/{id}/parking", [CityController::class, "getParking"]);
        Route::get("/parking", [ParkingZoneController::class, "index"]);
        Route::get('/stations', [StationsController::class, 'index']);
        Route::get('/stations/{id}', [StationsController::class, 'show']);

        Route::post("/parking/bike", [ParkingZoneController::class, "parkBike"]);

        Route::put('/bike/{id}', [BikeController::class, 'update']);

        Route::delete("/parking/bike", [ParkingZoneController::class, "unparkBike"]);
    });

// Adminroutes
Route::middleware(["auth:sanctum", "ability:admin"])
    ->group(function () {
        Route::get("/customer", [CustomerController::class, "index"]);
        Route::get("/parking/{id}/bikes", [ParkingZoneController::class, "getBikes"]);

        Route::post("/parking", [ParkingZoneController::class, "create"]);
        Route::post("/stations", [StationsController::class, "store"]);
        Route::post("/bike", [BikeController::class, "store"]);
        Route::post("/city", [CityController::class, "store"]);
        Route::post("/city/{id}/bikes", [CityController::class, "addBike"]);
        Route::post("/stations/moveBike", [StationsController::class, "addBike"]);

        Route::put("/stations/{id}", [StationsController::class, "update"]);
        Route::put('/city/{id}', [CityController::class, 'update']);

        Route::delete('/stations/{id}', [StationsController::class, 'destroy']);
        Route::delete('/bike/{id}', [BikeController::class, 'destroy']);
        Route::delete('/city/{id}', [CityController::class, 'destroy']);
    });

// Personliga routes
Route::prefix("/customer/{id}")
    ->middleware(["auth:sanctum", "ability:customer,admin"]) // should have verifyCustomerId as well
    ->group(function () {
        $controller = CustomerController::class;

        Route::get("/", [$controller, "show"]);
        Route::put("/", [$controller, "update"]);
        Route::delete("/", [$controller, "destroy"]);
        Route::get("/history", [$controller, "showHistory"]);
        Route::post("/history", [$controller, "storeHistory"]);
    });

// Demo personliga routes middleware
Route::prefix("/perm_demo/customer/{id}")
    ->middleware(["auth:sanctum", "ability:customer,admin", "verifyCustomerId"])
    ->group(function () {
        $controller = CustomerController::class;

        Route::get("/", [$controller, "show"]);
        Route::put("/", [$controller, "update"]);
        Route::delete("/", [$controller, "destroy"]);
        Route::get("/history", [$controller, "showHistory"]);
        Route::post("/history", [$controller, "storeHistory"]);
    });
