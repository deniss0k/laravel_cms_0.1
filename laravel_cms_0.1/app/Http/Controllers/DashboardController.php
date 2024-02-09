<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

use App\Models\Module;

class DashboardController extends Controller
{
    public function index()
    {
        $slug = Route::current()->parameter('slug');
        $module = Module::where('slug', $slug)->first();

        return view('dashboard', ['module' => $module]);
    }
}
