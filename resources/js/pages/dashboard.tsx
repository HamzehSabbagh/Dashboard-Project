import { router, useForm } from "@inertiajs/react";
import React from "react";

type project = {
    id: number;
    name: string;
    status: string;
    priority: string;
    due_date: string | null;
}

type props = {
    projects: project[];
}

export default function Dashboard({ projects }: props) {
    const { data, setData, errors, processing, post, reset } = useForm({
        'name': '',
        'status': 'pending',
        'priority': 'medium',
        'due_date': '',
    })

    function submit(e: React.FormEvent) {
        e.preventDefault()
        post('/projects', {
            onSuccess: () => reset(),
        });
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <h1 className="text-3xl font-bold text-slate-900">Projects Dashboard</h1>
            <form onSubmit={submit} className="mt-8 max-w-xl rounded-lg bg-white p-6 shadow">
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Project Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Status</label>
                    <select
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    >
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                    {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status}</p>}
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Priority</label>
                    <select
                        value={data.priority}
                        onChange={(e) => setData('priority', e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    {errors.priority && <p className="mt-1 text-sm text-red-600">{errors.priority}</p>}
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Due Date</label>
                    <input
                        type="date"
                        value={data.due_date}
                        onChange={(e) => setData('due_date', e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded bg-blue-600 px-4 py-2 text-white"
                >
                    {processing ? 'Saving...' : 'Create Project'}
                </button>
            </form>

            <div className="mt-10">
                <h2 className="text-2xl font-semibold">Projects</h2>

                <div className="mt-4 space-y-4">
                    {projects.map((project) => (
                        <div key={project.id} className="rounded-lg bg-white p-4 shadow">
                            <h3 className="text-lg font-semibold ">{project.name}</h3>
                            <p>Status: {project.status}</p>
                            <p>Priority: {project.priority}</p>
                            <p>Due Date: {project.due_date ?? 'No due date'}</p>
                            <button
                                onClick={() => router.delete(`/projects/${project.id}`)}
                                className="mt-2 rounded bg-red-600 px-3 py-1 text-white"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
