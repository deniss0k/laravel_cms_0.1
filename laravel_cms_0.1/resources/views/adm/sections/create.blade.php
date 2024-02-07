@extends('adm.layouts.app')
@section('title', $module->name)

@section('content')

<a href="{{ route('adm.sections.create') }}" class="btn btn-primary">Add</a>

@endsection
