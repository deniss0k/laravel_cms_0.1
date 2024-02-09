@extends('layouts.app')

@section('title', isset($record) ? 'Edit section' : 'Add section')

@section('content')
    <form
        action="{{ isset($record) ? route('adm.sections.update', ['record' => $record]) : route('adm.sections.store') }}"
        method="POST">
        @csrf
        @isset($record)
            @method('PUT')
        @endisset
        <div class="form__group">
            <label for="name">Name</label>
            <input @class(['border-red-300' => $errors->has('name')]) type="text" name="name" id="name"
                   value="{{ $record->name ?? old('name') }}">
            @error('name')
            <p class="error">{{ $message }}</p>
            @enderror
        </div>
        <div class="form__group">
            <label for="slug">Slug</label>
            <input @class(['border-red-300' => $errors->has('slug')]) type="text" name="slug" id="slug"
                   value="{{ $record->slug ?? old('slug') }}">
            @error('slug')
            <p class="error">{{ $message }}</p>
            @enderror
        </div>
        <div class="form__group">
            <label for="controller">Controller</label>
            <input @class(['border-red-300' => $errors->has('slug')]) type="text" name="controller" id="controller"
                   value="{{ $record->controller ?? old('controller') }}">
            @error('controller')
            <p class="error">{{ $message }}</p>
            @enderror
        </div>
        <div class="form__group">
            <label for="label">Label</label>
            <input @class(['border-red-300' => $errors->has('label')]) type="text" name="label" id="label"
                   value="{{ $record->label ?? old('label') }}">
            @error('label')
            <p class="error">{{ $message }}</p>
            @enderror
        </div>
        <div class="form__group">
            <label for="ord">Ordinal</label>
            <input @class(['border-red-300' => $errors->has('ord')]) type="number" name="ord" id="ord"
                   value="{{ $record->ord ?? old('ord') }}">
            @error('ord')
            <p class="error">{{ $message }}</p>
            @enderror
        </div>
        <div class="flex gap-4 w-full justify-between">
            @if(!isset($record))
                <a href="{{ route('adm.sections.index') }}" class="btn">Cancel</a>
            @endif
            <button type="submit"
                    class="btn btn--dark">
                {{ isset($record) ? 'Save' : 'Add section' }}
            </button>
        </div>
    </form>
@endsection
