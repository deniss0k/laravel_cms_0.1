<?php

use App\Models\Module;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

$modules = Module::all();

foreach ($modules as $module) {
    $controllerName = $module->controller;
    $methodName = 'index'; // Или другой метод, в зависимости от логики вашего приложения

    Route::get("adm/$module->slug", "$controllerName@$methodName")->name($module->name);
}
