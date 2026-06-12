import { useForm } from "@inertiajs/react";
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

                </div>
                <div></div>
                <div></div>
                <button></button>
            </form>
            <div></div>
        </div>
    )
}