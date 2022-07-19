<?php

namespace App\Http\Controllers;

use App\Http\Resources\Hotel\HotelResource;
use App\Models\Country;
use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index($country_id)
    {
        $hotels = Hotel::with('rating')->where('country_id', $country_id)->get();

        return response()->json($hotels);
    }
    public function indexHotels()
    {
        $hotels = Hotel::all();

        return response()->json($hotels);
    }
    public function store(Request $request)
    {
        $data = $request->except('_token');

        $data['image'] = $request->file('image')->store('images');

        Hotel::create($data);

        return response()->json();
    }

    public function show($id)
    {
        $hotel = Hotel::with('rooms', 'country')->find($id);
        return response()->json($hotel);
    }

    public function update(Request $request, $id)
    {
        $data = $request->except('_token', '_method');

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('images');
        }

        $hotel = Hotel::find($id);

        $hotel->update($data);

        return response()->json();
    }

    public function destroy(Hotel $hotel)
    {
        $hotel->delete();
        return response([]);
    }
}
