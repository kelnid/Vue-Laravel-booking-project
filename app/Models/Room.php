<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $guarded = false;

    public function hotel()
    {
        return $this->belongsTo(Hotel::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class)->using(RoomUser::class)->withPivot('startDate', 'endDate');
    }
}
