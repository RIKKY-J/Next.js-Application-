import Link from "next/link";
import ComponentsPage from "../_components/page";

export default function layout({ children }) {
    return (
        <>
            <h1>Application Layout</h1>
            <ComponentsPage />
            <nav>
                <ul>
                    <li><Link href="/blogs/1">Blog 1</Link></li>
                    <li><Link href="/blogs/2">Blog 2</Link></li>
                    <li><Link href="/blogs/test">Blog Test</Link></li>
                </ul>
            </nav>
            {children}
        </>
    );
}