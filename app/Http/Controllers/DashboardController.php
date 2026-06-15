<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $projects = Project::query()->latest()->get();

        return Inertia::render('dashboard', [
            'projects' => $projects,
            'success' => session('success'),
        ]);
    }
}
