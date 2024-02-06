<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Module;
use Illuminate\Support\Facades\Route;

class SectionsController extends Controller
{
    public function index()
    {
        $route = Route::current();

        $moduleID = $route->parameter('module');

        $module = Module::where('id', $moduleID)->first();

        return view('adm.sections', ['module' => $moduleID]);
    }
}
