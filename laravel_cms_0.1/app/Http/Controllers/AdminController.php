<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
