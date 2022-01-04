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

        return response()->json(["data" => $newZone], 201);
    }

    public function parkBike(Request $request): JsonResponse
    {
        $request->validate([
            "bike" => "required",
            "zone" => "required"
        ]);

        $bikeID = $request->post("bike");
        $zoneID = $request->post("zone");
        $bike = null;
        $zone = null;

        try {
            $bike = Bike::findOrFail($bikeID);
            $zone = ParkingZone::findOrFail($zoneID);
        } catch (ModelNotFoundException $e) {
            error_log($e->getMessage());
            return response()->json(["error" => "Either bike or the parking zone doesn't exist"], 404);
        }

        Bike2ParkingZone::updateOrInsert(["bike" => $bikeID], ["zone" => $zoneID]);
        $bike->longitude = $zone->center_long;
        $bike->latitude = $zone->center_lat;
        $bike->save();

        return response()->json([
            "data" => [
                "bike" => $bike,
                "zone" => $zone
            ]
        ]);
    }

    public function unparkBike(Request $request): JsonResponse
    {
        $request->validate([
            "bike" => "required"
        ]);

        $b2pz = Bike2ParkingZone::query()->select(["*"])->where("bike", "=", $request->post("bike"))->get()->first();

        return response()->json([
            "data" => Bike2ParkingZone::destroy($b2pz->id)
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
