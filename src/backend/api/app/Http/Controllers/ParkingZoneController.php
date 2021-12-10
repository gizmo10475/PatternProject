<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\ParkingZone;
use App\Models\ParkingZone2City;

class ParkingZoneController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(["data" => ParkingZone::all()]);
    }

    public function create(Request $request): JsonResponse
    {
        $request->validate([
            "longitude" => "required",
            "latitude" => "required",
            "radius" => "required"
        ]);

        $newZone = ParkingZone::create([
            "center_long" => $request->post("longitude"),
            "center_lat" => $request->post("latitude"),
            "radius" => $request->post("radius")
        ]);

        if ($request->post("city", false)) {
            ParkingZone2City::create([
                "city" => $request->post("city"),
                "zone" => $newZone->id
            ]);
        }

        return response()->json(["data" => $newZone]);
    }
}
