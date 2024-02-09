<?php

namespace App\Http\Controllers\adm;

use App\Http\Controllers\Controller;
use App\Http\Requests\SectionRequest;
use App\Models\Module;
use App\Models\Section;
use Illuminate\Http\Request;

class SectionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Module $module)
    {
        return view('adm.sections.index', ['module' => $module]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Module $module)
    {
        return view('adm.sections.create', ['module' => $module]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SectionRequest $request): \Illuminate\Http\RedirectResponse
    {
        $record = Section::create($request->validated());

        return redirect()->route('adm.sections.edit', $record);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Section $record)
    {
        return view('adm.sections.edit', ['record' => $record]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
