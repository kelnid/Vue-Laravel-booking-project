<?php

namespace App\Http\Resources\Hotel;

use Illuminate\Http\Resources\Json\JsonResource;

class HotelResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->image,
            'address' => $this->address,
            'description' => $this->description,
            'country_id' => $this->country_id,
        ];
    }
}
