<?php

namespace App\Rules;

use App\Models\RoomUser;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;

class DateNotBetween implements Rule, DataAwareRule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    protected $data = [];

    public function setData($data){
        $this->data = $data;
        return $this;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $firstPartOfTheRequest = RoomUser::where('room_id',$this->data['room_id'])
            ->whereDate('endDate', '>=', $this->data['startDate'])
            ->whereDate('endDate', '<=', $this->data['endDate'])->
            orWhereDate('startDate', '>=', $this->data['startDate'])
            ->whereDate('startDate', '<=', $this->data['endDate'])
            ->where('room_id',$this->data['room_id'])
            ->count();

        $secondPartOfTheRequest = RoomUser::where('room_id',$this->data['room_id'])
            ->whereDate('startDate','<=',$this->data['startDate'])
            ->whereDate('endDate','>=',$this->data['startDate'])
            ->count();

        $firstPartOfTheRequest += $secondPartOfTheRequest;

        return $firstPartOfTheRequest === 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'На эту дату уже забронирован номер';
    }
}
