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
    public function show($id)
    {
        $country = Country::find($id);

        return response()->json($country);
    }
    public function store(CountryRequest $request)
    {
        $data = $request->except('_token');

        $data['image'] = $request->file('image')->store('images');

        Country::create($data);

        return response()->json();
    }

    public function update(Request $request, $id)
    {
        $data = $request->except('_token', '_method');

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('images');
        }

        $country = Country::find($id);

        $country->update($data);

        return response()->json();
    }

    public function destroy(Country $country)
    {
        $country->delete();

        return response()->json();
    }
}
