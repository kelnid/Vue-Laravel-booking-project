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
        $data = $request->except('_token', '_method');

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('images');
        }

        $room = Room::find($id);

        $room->update($data);

        return response()->json();
    }

    public function destroy(Room $room)
    {
        $room->delete();

        return response()->json();
    }
}
