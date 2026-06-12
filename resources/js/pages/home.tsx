import { Link } from "@inertiajs/react";

type props = {
    message: string;
}
export default function Home({ message }: props) {
    return (
        <div>hello <Link href="/about">about</Link> {message}</div>

    )
}