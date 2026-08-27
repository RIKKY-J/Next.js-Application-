import Link from "next/link";

export default function Blogs() {
    return (
        <main>
            <h1>Blogs</h1>
            <ul>
                <li><Link href="/blogs/1">Blog 1</Link></li>
                <li><Link href="/blogs/2">Blog 2</Link></li>
            </ul>
        </main>
    );
}