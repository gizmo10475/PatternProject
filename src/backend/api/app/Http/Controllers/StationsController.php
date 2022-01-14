<?php

namespace App\Http\Controllers;

use App\Models\Bike;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Station;
use App\Models\Bike2Station;
use App\Models\Station2City;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class StationsController extends Controller
{
    /**
     * Display all stations.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse //GET station
    {
        $stations = Station::All();
        $stations = Station::calculateAvailableSlots($stations);
        return response()->json(["data" => $stations]);
    }

    /**
     * Store a new station in database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): JsonResponse //POST station
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'slots' => 'required',
            'longitude' => 'required',
            'latitude' => 'required',
            "city" => "required"
        ]);
        $newStationData = $request->all(["slots", "longitude", "latitude"]);
        $station = Station::create($newStationData);
        Station2City::create([
            "station" => $station->id,
            "city" => $request->input("city")
        ]);

        return response()->json(["data" => $station], 201);
    }

    /**
     * Display specific station.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): JsonResponse //GET station/{id}
    {
        return response()->json(["data" => Station::find($id)]);
    }

    /**
     * Update specific station.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id): JsonResponse //PUT station{id}
    {
        $station = Station::find($id);
        $station->update($request->all());
        return response()->json(["data" => $station]);
    }

    /**
     * Remove specific station.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): JsonResponse //DELETE station/{id}
    {
        return response()->json(["data" => Station::destroy($id)]);
    }

    public function addBike(Request $request): JsonResponse
    {
        $request->validate([
            "station" => "required",
            "bike" => "required"
        ]);

        $stationID = intval($request->input("station", -1));
        if ($stationID == -1) {
            return response()->json(["error" => "Invalid station"], 404);
        }
        $bikeID = intval($request->input("bike", -1));
        if ($bikeID == -1) {
            return response()->json(["error" => "Invalid bike"], 404);
        }

        try {
            $station = Station::find($stationID);
            $bike = Bike::find($bikeID);
        } catch (ModelNotFoundException $e) {
            error_log($e->getMessage());
            return response()->json(["error" => "Bike or station not found"], 404);
        }
        try {
            Bike2Station::query()->where("bike", "=", $bikeID)->firstOrFail();
        } catch (ModelNotFoundException $e) {
            Bike2Station::create([
                "bike" => $bike->id,
                "station" => $station->id
            ]);
        }

        $bike->update([
            "longitude" => $station->longitude,
            "latitude" => $station->latitude
        ]);

        return response()->json(["data" => "Bike moved"]);
    }
}
