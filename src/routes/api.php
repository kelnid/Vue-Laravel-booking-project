<?php

use App\Http\Controllers\CountryController;
use App\Http\Controllers\HotelController;
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

Route::group([
    'as' => 'countries.',
    'prefix' => 'countries',
], function () {
    Route::get('/', [CountryController::class, 'index'])->name('index');
    Route::get('/create/test', [CountryController::class, 'create'])->name('create');
    Route::post('/', [CountryController::class, 'store'])->name('store');
    Route::put('/{country}', [CountryController::class, 'update'])->name('update');
    Route::delete('{country}', [CountryController::class, 'destroy'])->name('destroy');
});

Route::group([
    'as' => 'hotels.',
    'prefix' => 'hotels',
], function () {
    Route::get('/{country?}', [HotelController::class, 'index'])->name('index');
    Route::get('/{country?}/create', [HotelController::class, 'create'])->name('create');
    Route::post('/', [HotelController::class, 'store'])->name('store');

    Route::group([
        'as' => 'show.',
        'prefix' => 'show',
    ], function () {
        Route::get('/{hotel}', [HotelController::class, 'show']);
    });

    Route::put('/{hotel}', [HotelController::class, 'update'])->name('update');
    Route::delete('/{hotel}', [HotelController::class, 'destroy'])->name('destroy');
});

Route::prefix('countries/{id}')->group(function (){
    Route::get('/hotels', [HotelController::class, 'index']);
});

//Route::prefix('countries/{id}/hotels')->group(function (){
//    Route::get('/{hotel}', [HotelController::class, 'index']);
//});
