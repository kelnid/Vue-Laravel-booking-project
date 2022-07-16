<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\RoomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::post('/login', [LoginController::class, 'login']);
//Route::post('/register', [RegisterController::class, 'register']);

Route::group([
    'as' => 'countries.',
    'prefix' => 'countries',
], function () {
    Route::get('/', [CountryController::class, 'index'])->name('index');

    Route::group([
        'as' => 'store.',
        'prefix' => 'store',
    ], function () {
        Route::post('/', [CountryController::class, 'store'])->name('store');
    });

    Route::put('/{country}', [CountryController::class, 'update'])->name('update');
    Route::delete('{country}', [CountryController::class, 'destroy']);
});

Route::group([
    'as' => 'hotels.',
    'prefix' => 'hotels',
], function () {
    Route::post('/', [HotelController::class, 'store'])->name('store');
    Route::group([
        'as' => 'show.',
        'prefix' => 'show',
    ], function () {
        Route::get('/{hotel}', [HotelController::class, 'show']);
    });
    Route::get('/', [HotelController::class, 'indexHotels'])->name('indexHotels');
    Route::group([
        'as' => 'delete.',
        'prefix' => 'delete',
    ], function () {
        Route::delete('/{hotel}', [HotelController::class, 'destroy'])->name('destroy');
    });
    Route::put('/{hotel}', [HotelController::class, 'update'])->name('update');
});

Route::prefix('countries/{id}')->group(function () {
    Route::get('/hotels', [HotelController::class, 'index']);
});

Route::group([
    'as' => 'rooms.',
    'prefix' => 'rooms',
], function () {
    Route::group([
        'as' => 'show.',
        'prefix' => 'show',
    ], function () {
        Route::get('/{room}', [RoomController::class, 'show']);
    });
    Route::post('/', [RoomController::class, 'store'])->name('store');
});

Route::group([
    'as' => 'bookings.',
    'prefix' => 'bookings',
    'middleware' => 'auth:sanctum'
], function () {
    Route::group([
        'as' => 'store.',
        'prefix' => 'store',
    ], function () {
        Route::post('/', [BookingController::class, 'store']);
    });
    Route::group([
        'as' => 'index.',
        'prefix' => 'index',
    ], function () {
        Route::get('/', [BookingController::class, 'index']);
    });
    Route::group([
        'as' => 'bookings.',
        'prefix' => 'bookings',
    ], function () {
        Route::get('/{id}', [BookingController::class, 'bookings']);
    });
    Route::delete('{booking}', [BookingController::class, 'destroy']);
});
