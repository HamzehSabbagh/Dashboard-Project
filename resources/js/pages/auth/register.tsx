import { Link, useForm } from "@inertiajs/react"
import { useState } from "react";

export default function Register() {
    const { data, setData, processing, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    function submit(e: React.FormEvent) {
        e.preventDefault()

        post('/register')
    }

    return (
        <div className="min-w-screen bg-slate-100 p-8">
            <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow">
                <h1 className="text-2xl font-bold">Register</h1>

                <form onSubmit={submit} className="mt-6 space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full rounded border px-3 py-2"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full rounded border px-3 py-2"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full rounded border px-3 py-2"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((value) => !value)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-slate-600"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}

                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPasswordConfirmation ? 'text' : 'password'}
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="w-full rounded border px-3 py-2"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPasswordConfirmation((value) => !value)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-slate-600"
                            >
                                {showPasswordConfirmation ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        {errors.password_confirmation && <p className="mt-1 text-sm text-red-600">{errors.password_confirmation}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        {processing ? 'Registering...' : 'Register'}
                    </button>
                </form>

                <p className="mt-4 text-sm">
                    Already have an account?{' '}
                    <Link href='/login' className="text-blue-600 underline">Login</Link>
                </p>
            </div>
        </div>
    )
}