@extends('adm.layouts.app')
@section('title', $module->name)

@section('content')
    @include('adm.sections.form', ['record', $record])
@endsection
