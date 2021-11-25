<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\stations;


class StationsController extends Controller
{
    /**
     * Display all stations.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse //GET station
    {
        return response()->json(["data" => stations::All()]);
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
            'latitude' => 'required'
        ]);
        return response()->json([
            "data" => stations::create($request->all())
        ]);
    }

    /**
     * Display specific station.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): JsonResponse //GET station/{id}
    {
        return response()->json(["data" => stations::find($id)]);
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
        $station = stations::find($id);
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
        return response()->json(["data" => stations::destroy($id)]);
    }
}
