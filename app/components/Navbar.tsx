import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
    return (
    
    <nav className="bg-slate-700 sticky p-6 top-0 flex justify-between">
        <h1 className="font-bold text-white text-2xl">
            <Link href="/">Next 13.3 Test</Link>
        </h1>
        <Search />
    </nav>
    )
}