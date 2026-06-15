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

        return redirect()
                ->route('dashboard')
                ->with('success', "Project created successfully.");
    }

    public function destroy(Project $project): RedirectResponse
    {
        $project->delete();

        return redirect()
            ->route('dashboard')
            ->with('success', 'Project deleted successfully.');
    }

    public function update(Request $request, Project $project): RedirectResponse{
        $validated = $request->validate([
            'name' => ['required', 'min:3'],
            'status' => ['required'],
            'priority' => ['required'],
            'due_date' => ['date', 'nullable'],
        ]);

        $project->update($validated);

        return redirect()
            ->route('dashboard')
            ->with("success", "Project updated successfully.");
    }
}
