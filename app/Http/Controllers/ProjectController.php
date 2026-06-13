<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'min:3'],
            'status' => ['required'],
            'priority' => ['required'],
            'due_date' => ['nullable', 'date']
        ]);

        Project::create($validated);

        return redirect()->route('dashboard');
    }

    public function destroy(Project $project): RedirectResponse
    {
        $project->delete();

        return redirect()
            ->route('dashboard')
            ->with('success', 'Project deleted successfully.');
    }
}
