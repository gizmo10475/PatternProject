<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\cities;

class CityController extends Controller
{
    /**
     * Display all cities.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse //GET city
    {
        return response()->json(["data" => cities::All()]);
    }

    /**
     * Store a new city.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): JsonResponse //POST city
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'name' => 'required'
        ]);
        return response()->json(["data" => cities::create($request->all())]);
    }

    /**
     * Display specific city.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): JsonResponse //GET city/{id}
    {
        return response()->json(["data" => cities::find($id)]);
    }

    /**
     * Update specific city.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id): JsonResponse //PUT city/{id}
    {
        $city = cities::find($id);
        $city->update($request->all());
        return response()->json(["data" => $city]);
    }

    /**
     * Remove a specific city.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): JsonResponse //DELETE city/{id}
    {
        return response()->json(["data" => cities::destroy($id)]);
    }
}
