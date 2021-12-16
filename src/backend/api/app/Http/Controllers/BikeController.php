<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Bike;

class BikeController extends Controller
{
    /**
     * Display all bikes.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request): JsonResponse //GET bike
    {
        $onlyActive = $request->boolean("active", false);
        $onlyInactive = $request->boolean("inactive", false);
        if ($onlyInactive) {
            return response()->json(["data" => Bike::query()->get()->where("active", "=", false)]);
        }
        if ($onlyActive) {
            return response()->json(["data" => Bike::query()->get()->where("active", "=", true)]);
        }

        return response()->json(["data" => Bike::All()]);
    }

    /**
     * Store a newly created bike.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): JsonResponse //POST bike
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'longitude' => 'required',
            'latitude' => 'required'
        ]);
        return response()->json(["data" => Bike::create($request->all())], 201);
    }

    /**
     * Display specific bike.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): JsonResponse //GET bike/{id}
    {
        return response()->json(["data" => Bike::find($id)]);
    }

    /**
     * Update specific bike.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id): JsonResponse //PUT bike/{id}
    {
        $bike = Bike::find($id);
        $bike->update($request->all());
        return response()->json(["data" => $bike]);
    }

    /**
     * Remove specific bike.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): JsonResponse //DELETE bike/{id}
    {
        return response()->json(["data" => Bike::destroy($id)]);
    }
}
