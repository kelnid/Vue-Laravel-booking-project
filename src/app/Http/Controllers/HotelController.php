<?php

namespace App\Http\Controllers;

use App\Http\Resources\Hotel\HotelResource;
use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index($country_id)
    {
        $hotels = Hotel::where('country_id', $country_id)->get();
        return response()->json($hotels);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        $hotel = Hotel::find($id);
//        ->with('rooms')
//        ->with(['rooms','связь из модели'])
        return response()->json($hotel);
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
