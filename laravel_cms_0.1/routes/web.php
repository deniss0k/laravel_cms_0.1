<?php

use App\Models\Module;
use App\Models\Section;
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

$ADMIN_FOLDER = config('constants.ADMIN_FOLDER');

Route::prefix($ADMIN_FOLDER)->group(function () {

    $modules = Module::all();

    foreach ($modules as $module) {
        if ($module->main === 1) {
            Route::get("/", "App\Http\Controllers\Admin\\$module->controller@index")->name($module->name);
        }
        Route::get("/$module->slug", "App\Http\Controllers\Admin\\$module->controller@index")->where('moduleID', $module->id)->name($module->name);
    }
});

$sections = Section::all();

foreach ($sections as $section) {
    if ($section->main === 1) {
        Route::get("/", "App\Http\Controllers\Site\\$section->controller@index")->name($section->name);
    }
    Route::get("$section->slug", "App\Http\Controllers\Site\\$section->controller@index")->name($section->name);
}
