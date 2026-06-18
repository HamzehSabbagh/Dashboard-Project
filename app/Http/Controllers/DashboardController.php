<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $projects = $request->
            user()
            ->projects()
            ->with('tasks')
            ->latest()
            ->get();

        return Inertia::render('dashboard', [
            'projects' => $projects,
            'success' => session('success'),
        ]);
    }
}
