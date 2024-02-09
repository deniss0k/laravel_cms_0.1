<?php

use App\Http\Controllers\adm\AdminController;
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

define('ADMIN_FOLDER', config('constants.ADMIN_FOLDER'));

$controllersPath = 'App\Http\Controllers';

//Route::prefix($ADMIN_FOLDER)->group(function () use ($controllersPath) {
//    Route::get('/{slug}', function (string $slug) use ($controllersPath) {
//        $module = Module::where('slug', $slug)->first()
//            ?? abort(404);
//        $controller = app("$controllersPath\Admin\\$module->controller");
//        return $controller->index($module);
//    });
//});

$modules = Module::all();

Route::prefix(ADMIN_FOLDER)->name('adm.')->group(function () use ($controllersPath, $modules) {
    foreach ($modules as $module) {
        $controller = "$controllersPath\\" . ADMIN_FOLDER . "\\$module->controller";
        Route::resource($module->slug, $controller);
    }
});

$sections = Section::all();

foreach ($sections as $section) {
    if ($section->main === 1) {
        Route::get("/", "App\Http\Controllers\\$section->controller@index")->name($section->slug);
    }
    Route::get("$section->slug", "App\Http\Controllers\\$section->controller@index")->name($section->slug);
}
