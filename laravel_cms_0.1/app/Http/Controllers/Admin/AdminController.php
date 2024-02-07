<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class AdminController extends Controller
{

    public function index()
    {
        return view('adm.dashboard');
    }

    public function show($slug)
    {
        return view('adm.users');
    }
}
