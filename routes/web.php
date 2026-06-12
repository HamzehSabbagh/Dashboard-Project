<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home',[
    "message" => 'Hello from laravel',
])->name('home');

Route::inertia('/about', 'about')->name('about');

Route::get('/contact', function() {
    return inertia('contact', [
        'success' => session('success'),
    ]);
})->name('contact');

Route::post('/contact', function(Request $request) {
    $validated = $request->validate([
        'name' => ['required', 'min:3'],
    ]);

    return redirect()
        ->route('home')
        ->with('success', "hello {$validated['name']}");
})->name('contact.submit');

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');