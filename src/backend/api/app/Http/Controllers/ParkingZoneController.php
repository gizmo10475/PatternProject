<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\ParkingZone;

class ParkingZoneController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(["data" => ParkingZone::all()]);
    }
}
