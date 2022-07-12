<?php

namespace App\Http\Requests;

use App\Rules\DateNotBetween;
use Illuminate\Foundation\Http\FormRequest;

class BookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules()
    {
        return [
            'startDate' => ['required','date',new DateNotBetween, 'before:endDate'],
            'endDate' => ['required','date',new DateNotBetween, 'after:startDate'],
        ];
    }
}
