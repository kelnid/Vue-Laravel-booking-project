<?php

namespace App\Http\Controllers;

use App\Http\Requests\CountryRequest;
use App\Http\Resources\Country\CountryResource;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::all();
        return response()->json($countries);
    }
    public function store(CountryRequest $request)
    {
        $data = $request->validated();
        Country::create($data);

        return response([]);
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy(Country $country)
    {
        $country->delete();
        return response([]);
    }
}
