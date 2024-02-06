<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

use App\Models\Module;

class DashboardController extends Controller
{
    public function index()
    {
        $route = Route::current();

        $moduleSlug = $route->parameter('module_slug');

        $module = Module::where('slug', $moduleSlug)->first();

        return view('adm.dashboard', ['module' => $route]);
    }
}
