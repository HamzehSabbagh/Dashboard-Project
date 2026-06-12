import { useForm } from "@inertiajs/react";
import React from "react";

type props = {
    success?: string;
}

export default function Contact({ success }: props) {
    const { data, setData, processing, errors, post } = useForm({
        name: '',
    })

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/contact');
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>name</label>
                {errors.name && 'error'}
                <input
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />

                <button type="submit" disabled={processing}>{processing ? 'sending' : 'send'}</button>
                {success && <p>{success}</p>}
            </form>
        </div>
    )
}