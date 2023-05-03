import Link from "next/link";

export default function Navbar() {
    return (
    
    <nav className="bg-slate-700 sticky p-6 text-white top-0">
        <h1 className="font-bold">
            <Link href="/">Next 13.3 Test</Link>
        </h1>
    </nav>
    )
}