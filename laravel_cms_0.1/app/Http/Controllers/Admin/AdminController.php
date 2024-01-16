<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class AdminController extends Controller
{

    public function index()
    {
        return view('adm.dashboard');
    }

    public function users()
    {
        return view('adm.users');
    }
}
