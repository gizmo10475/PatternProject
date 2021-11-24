<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\stations;


class StationsController extends Controller
{
    /**
     * Display all stations.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() //GET station
    {
        return stations::All();
    }

    /**
     * Store a new station in database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) //POST station
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'slots' => 'required'
        ]);
        return stations::create($request->all());
    }

    /**
     * Display specific station.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) //GET station/{id}
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
    public function update(Request $request, $id) //PUT station{id}
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
    public function destroy($id) //DELETE station/{id}
    {
        return stations::destroy($id);
    }
}
