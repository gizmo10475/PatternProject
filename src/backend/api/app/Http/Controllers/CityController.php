<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\cities;

class CityController extends Controller
{
    /**
     * Display all cities.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response //GET city
    {
        return cities::All();
    }

    /**
     * Store a new city.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): Response //POST city
    {
        $request->validate([ //this needs to be in 'body' to get posted.
            'name' => 'required'
        ]);
        return cities::create($request->all());
    }

    /**
     * Display specific city.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id): Response //GET city/{id}
    {
        return cities::find($id);
    }

    /**
     * Update specific city.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id): Response //PUT city/{id}
    {
        $city = cities::find($id);
        $city->update($request->all());
        return $city;
    }

    /**
     * Remove a specific city.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id): Response //DELETE city/{id}
    {
        return cities::destroy($id);
    }
}
