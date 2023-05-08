import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
    return (
    
    <nav className="bg-blue-900 sticky p-6 top-0 flex justify-between">
        <h1 className="font-bold text-white text-2xl">
            <Link href="/">Home</Link>
        </h1>
        <Search />
    </nav>
    )
}