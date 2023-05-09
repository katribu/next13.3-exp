import { getData } from "@/lib/getData";
import Character from "./components/Character";

const Memory = async () => {
    const results: Avatars = await getData()


    return (
        <div className="text-white text-center">
            <h1 className="text-3xl">Memory Game</h1>
            <p>Match every card with it's pair in the least amount of tries possible</p>

            <div className="grid grid-cols-5 gap-3 w-3/5 place-content-center my-0 mx-auto gap-x-0 mt-5">
                <Character characters={results} />
            </div>

        </div>
    )
}

export default Memory;