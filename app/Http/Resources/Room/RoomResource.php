<?php

namespace App\Http\Resources\Room;

use Illuminate\Http\Resources\Json\JsonResource;

class RoomResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'bed' => $this->bed,
            'area' => $this->area,
            'price' => $this->price,
            'hotel_id' => $this->hotel_id,
        ];
    }
}
