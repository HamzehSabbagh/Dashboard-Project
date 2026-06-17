import { Link, useForm } from "@inertiajs/react"
import { useState } from "react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    const [showPassword, setShowPassword] = useState(false);

    function submit(e: React.FormEvent) {
        e.preventDefault()

        post('/login');
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow">
                <h1 className="text-2xl font-bold">Login</h1>

                <form onSubmit={submit} className="mt-6 space-y-4">
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
                    <label className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        Remember me
                    </label>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        {processing ? 'Logging in' : 'Login in'}
                    </button>
                </form>

                <p className="mt-4 text-sm">Don't have an account?{' '}
                    <Link href='/register' className="text-blue-600 underline">Register</Link>
                </p>
            </div>
        </div>
    )
}