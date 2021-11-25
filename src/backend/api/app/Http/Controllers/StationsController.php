<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\stations;


class StationsController extends Controller
{
    /**
     * Display all stations.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response //GET station
    {
        return stations::All();
    }

    /**
     * Store a new station in database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): Response //POST station
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'slots' => 'required',
            'longitude' => 'required',
            'latitude' => 'required'
        ]);
        return stations::create($request->all());
    }

    /**
     * Display specific station.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): Response //GET station/{id}
    {
        return stations::find($id);
    }

    /**
     * Update specific station.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id): Response //PUT station{id}
    {
        $station = stations::find($id);
        $station->update($request->all());
        return $station;
    }

    /**
     * Remove specific station.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): Response //DELETE station/{id}
    {
        return stations::destroy($id);
    }
}
