<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/instrumentos', [\App\Http\Controllers\InstrumentController::class, 'getInstruments']);
Route::get('/instrumentos/{id}', [\App\Http\Controllers\LessonsController::class, 'getLessonsInstrument'])
    ->whereNumber('id');
Route::get('/clase/{id}', [\App\Http\Controllers\LessonsController::class, 'getLesson'])
    ->whereNumber('id');
Route::get('/lista-partituras', [\App\Http\Controllers\SheetMusicController::class, 'getListSheetMusic']);
Route::get('/partitura/{id}', [\App\Http\Controllers\SheetMusicController::class, 'getSheetMusic'])
    ->whereNumber('id');

/**------------------------------ RUTAS DEL ADMIN ---------------------------------- */

Route::post('/admin/instrumento/nuevo', [\App\Http\Controllers\InstrumentController::class, 'createInstrument']);
Route::post('/admin/instrumento/{id}/editar', [\App\Http\Controllers\InstrumentController::class, 'editInstrument'])
    ->whereNumber('id');
Route::post('/admin/instrumento/{id}/eliminar', [\App\Http\Controllers\InstrumentController::class, 'deleteInstrument'])
    ->whereNumber('id');
Route::post('/admin/clase/nuevo', [\App\Http\Controllers\LessonsController::class, 'createLesson']);
Route::post('/admin/clase/{id}/editar', [\App\Http\Controllers\LessonsController::class, 'editLesson'])
    ->whereNumber('id');
Route::post('/admin/clase/{id}/eliminar', [\App\Http\Controllers\LessonsController::class, 'deleteLesson'])
    ->whereNumber('id');
Route::post('/admin/partitura/nuevo', [\App\Http\Controllers\SheetMusicController::class, 'createSheetMusic']);
Route::post('/admin/partitura/{id}/editar', [\App\Http\Controllers\SheetMusicController::class, 'editSheetMusic'])
    ->whereNumber('id');
Route::post('/admin/partitura/{id}/eliminar', [\App\Http\Controllers\SheetMusicController::class, 'deleteSheetMusic'])
    ->whereNumber('id');

/**------------------------------ RUTAS DE SESION ---------------------------------- */

Route::post('/iniciar-sesion', [App\Http\Controllers\AuthController::class, 'login'])
    ->name('login');
Route::post('/cerrar-sesion', [App\Http\Controllers\AuthController::class, 'logout'])
    ->middleware('auth:sanctum');
Route::post('/crear-cuenta', [App\Http\Controllers\AuthController::class, 'register']);