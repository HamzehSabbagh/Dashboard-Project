<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Project $project): RedirectResponse
    {
        abort_if($request->user()->id !== $project->user_id, 403);

        $validated = $request->validate([
            'title' => ['required', 'min:3'],
        ]);

        $project->tasks()->create([
            'title' => $validated['title'],
            'is_completed' => false,
        ]);

        return redirect()
            ->route('dashboard')
            ->with('success', 'Task created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task): RedirectResponse
    {
        $this->authorize('delete', $task);

        $task->delete();

        return redirect()
            ->route('dashboard')
            ->with('success', 'Task deleted successfully');
    }

    public function toggle(Task $task): RedirectResponse
    {
        $this->authorize('update', $task);

        $task->update([
            'is_completed' => ! $task->is_completed,
        ]);

        return redirect()->route('dashboard')->with('success', 'Task updated successfully.');
    }
}
