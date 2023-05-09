import { getData } from "@/lib/getData";
import Character from "./components/Character";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Memory",
    description: 'Memory matching game',
  }

const Memory = async () => {
    const results: Avatars = await getData()


    return (
        <div className="text-white text-center">
            <h1 className="text-3xl">Super Smash Bros.™ Memory</h1>
            <p>Match every card with it's pair in the least amount of tries possible</p>

            <div className="grid grid-cols-5 w-3/5 place-content-center my-5 mx-auto gap-x-0">
                <Character characters={results} />
            </div>

        </div>
    )
}

export default Memory;