<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Models\RoomUser;
use App\Models\User;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = User::find(auth()->user()->id)->rooms;

        return response()->json($bookings);
    }
    public function bookings($id)
    {
        $bookings = RoomUser::where('room_id', $id)->get();

        $dates = RoomUser::whereRoomId($id)->get(['startDate', 'endDate']);

        $datesRange = [];

        foreach ($dates as $date) {
            $period = CarbonPeriod::create($date->startDate, $date->endDate);

            foreach ($period as $per) {
                $datesRange[] = $per->format('Y-m-j');
            }
        }

        return response()->json($bookings->put('unavailable_dates', $datesRange));
    }
    public function store(BookingRequest $request)
    {
        $data = $request->except('_token');

        $data['user_id'] = auth()->user()->id;

        $booking = RoomUser::create($data);

        return response()->json($booking);
    }
    public function destroy($id)
    {
        $booking = RoomUser::find($id);

        $booking->delete();

        return response()->json();
    }
}
