<?php

use App\Http\Controllers\Admin\AdminController;
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
$controllersPath = 'App\Http\Controllers';

Route::prefix($ADMIN_FOLDER)->group(function () use ($controllersPath) {
    Route::get('/{slug}', function (string $slug) use ($controllersPath) {
        $module = Module::where('slug', $slug)->first()
            ?? abort(404);
        $controller = app("$controllersPath\Admin\\$module->controller");
        return $controller->index($module);
    });
});

Route::prefix($ADMIN_FOLDER)->group(function () use ($controllersPath, $modules) {
    // Define a resource route for each module
    foreach ($modules as $module) {
        $controller = "$controllersPath\Admin\\$module->controller";
        Route::resource($module->slug, $controller);
    }
});

$sections = Section::all();

foreach ($sections as $section) {
    if ($section->main === 1) {
        Route::get("/", "App\Http\Controllers\Site\\$section->controller@index")->name($section->name);
    }
    Route::get("$section->slug", "App\Http\Controllers\Site\\$section->controller@index")->name($section->name);
}
