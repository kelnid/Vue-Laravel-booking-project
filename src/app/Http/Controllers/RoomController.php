<?php

namespace App\Http\Controllers;

use App\Http\Resources\Room\RoomResource;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->except('_token');

        $data['image'] = $request->file('image')->store('images');

        Room::create($data);

        return response()->json();
    }

    public function show($id)
    {
        $room = Room::find($id);

        return response()->json($room);
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
