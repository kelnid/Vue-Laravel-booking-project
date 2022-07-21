<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\RatingController;
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

Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [LoginController::class, 'logout']);
    Route::get('user', [LoginController::class, 'user']);
});
Route::group([
    'as' => 'countries.',
    'prefix' => 'countries',
], function () {
    Route::get('/', [CountryController::class, 'index'])->name('index');
    Route::get('/{country}', [CountryController::class, 'show'])->name('show');
    Route::group([
        'as' => 'store.',
        'prefix' => 'store',
        'middleware' => 'auth:sanctum'
    ], function () {
        Route::post('/', [CountryController::class, 'store'])->name('store');
    });
    Route::middleware('auth:sanctum')->patch('/{country}', [CountryController::class, 'update'])->name('update');
    Route::middleware('auth:sanctum')->delete('{country}', [CountryController::class, 'destroy']);
});
Route::group([
    'as' => 'hotels.',
    'prefix' => 'hotels',
], function () {
    Route::middleware('auth:sanctum')->post('/', [HotelController::class, 'store'])->name('store');
    Route::group([
        'as' => 'rate.',
        'prefix' => 'rate'
    ], function () {
        Route::get('/{hotel}', [RatingController::class, 'show']);
    });
    Route::group([
        'as' => 'post-rate.',
        'prefix' => 'post-rate'
    ], function () {
        Route::post('/', [RatingController::class, 'store']);
    });
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
        'middleware' => 'auth:sanctum'
    ], function () {
        Route::delete('/{hotel}', [HotelController::class, 'destroy'])->name('destroy');
    });
    Route::group([
        'as' => 'add-comment.',
        'prefix' => 'add-comment',
    ], function () {
        Route::post('/', [CommentController::class, 'store']);
    });
    Route::group([
        'as' => 'show-comment.',
        'prefix' => 'show-comment',
    ], function () {
        Route::get('/{id}', [CommentController::class, 'show']);
    });
    Route::group([
        'as' => 'update.',
        'prefix' => 'update',
    ], function () {
        Route::patch('/{id}', [CommentController::class, 'update']);
    });
    Route::middleware('auth:sanctum')->patch('/{hotel}', [HotelController::class, 'update'])->name('update');
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
    Route::middleware('auth:sanctum')->patch('/{room}', [RoomController::class, 'update'])->name('update');
    Route::middleware('auth:sanctum')->post('/', [RoomController::class, 'store'])->name('store');
    Route::group([
        'as' => 'delete.',
        'prefix' => 'delete',
        'middleware' => 'auth:sanctum'
    ], function () {
        Route::delete('/{room}', [RoomController::class, 'destroy'])->name('destroy');
    });
});

Route::group([
    'as' => 'bookings.',
    'prefix' => 'bookings',
], function () {
    Route::group([
        'as' => 'store.',
        'prefix' => 'store',
        'middleware' => 'auth:sanctum'
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
    Route::middleware('auth:sanctum')->delete('{booking}', [BookingController::class, 'destroy']);
});


