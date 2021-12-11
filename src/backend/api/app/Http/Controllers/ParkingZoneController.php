<?php

namespace App\Http\Controllers;

use App\Models\Bike;
use App\Models\Bike2ParkingZone;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\ParkingZone;
use App\Models\ParkingZone2City;
use Illuminate\Database\Eloquent\ModelNotFoundException;

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

    public function parkBike(Request $request): JsonResponse
    {
        $request->validate([
            "bike" => "required",
            "zone" => "required"
        ]);

        $bike = $request->post("bike");
        $zone = $request->post("zone");

        try {
            Bike::findOrFail($bike);
            ParkingZone::findOrFail($zone);
        } catch (ModelNotFoundException $e) {
            error_log($e->getMessage());
            return response()->json(["error" => "Either bike or the parking zone doesn't exist"], 404);
        }

        Bike2ParkingZone::updateOrInsert(["bike" => $bike], ["zone" => $zone]);
        return response()->json([
            "data" => [
                "bike" => Bike::find($bike),
                "zone" => ParkingZone::find($zone)
            ]
        ]);
    }

    public function getBikes(int $id): JsonResponse
    {
        $zone = null;
        try {
            $zone = ParkingZone::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            error_log($e->getMessage());
            return response()->json(["error" => "Parking zone with id $id doesn't exist"], 404);
        }

        $zone->bikes;
        return response()->json(["data" => ["zone" => $zone]]);
    }
}
