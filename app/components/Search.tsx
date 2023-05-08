'use client'

import {useState, FormEvent} from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [search, setSearch] = useState<string>('')
    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        router.push(`/${search}/`)
    }

    return (
        <form onSubmit={handleSubmit}
        className="flex"
        >
            <input
            type="text"
            onChange={e => setSearch(e.target.value)}
            value={search}
            className="h-10 w-70 text-xl pl-3 rounded-md"
            placeholder="Wiki Search..."
            />
            <button className="w-10 bg-blue-500 ml-2 rounded-md text-xl hover:bg-stone-900 text-white">
            🔍
            </button>
        </form>
    )
}