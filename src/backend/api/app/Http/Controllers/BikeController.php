<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\bikes;

class BikeController extends Controller
{
    /**
     * Display all bikes.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response //GET bike
    {
        return bikes::All();
    }

    /**
     * Store a newly created bike.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): Response //POST bike
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'longitude' => 'required',
            'latitude' => 'required'
        ]);
        return bikes::create($request->all());
    }

    /**
     * Display specific bike.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): Response //GET bike/{id}
    {
        return bikes::find($id);
    }

    /**
     * Update specific bike.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id): Response //PUT bike/{id}
    {
        $bike = bikes::find($id);
        $bike->update($request->all());
        return $bike;
    }

    /**
     * Remove specific bike.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): Response //DELETE bike/{id}
    {
        return bikes::destroy($id);
    }
}
