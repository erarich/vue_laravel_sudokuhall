<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;

Route::post('/auth', [Auth::class, 'auth']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('users', 'UserController@index');
Route::group(['prefix' => 'post'], function () {
    Route::post('add', 'UserController@add');
    Route::get('edit/{id}', 'UserController@edit');
    Route::post('update/{id}', 'UserController@update');
    Route::delete('delete/{id}', 'UserController@delete');
});