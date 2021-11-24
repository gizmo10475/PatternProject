<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\bikes;

class BikeController extends Controller
{
    /**
     * Display all bikes.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() //GET bike
    {
        return bikes::All();
    }

    /**
     * Store a newly created bike.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) //POST bike
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'location' => 'required'
        ]);
        return bikes::create($request->all());
    }

    /**
     * Display specific bike.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) //GET bike/{id}
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
    public function update(Request $request, $id) //PUT bike/{id}
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
    public function destroy($id) //DELETE bike/{id}
    {
        return bikes::destroy($id);
    }
}
