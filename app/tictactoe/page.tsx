import { Metadata } from "next";
import TTTBoard from "./components/TTTBoard";

export const metadata: Metadata = {
    title: "Tic-Tac-Toe",
    description: 'Tic-tac-toe game',
}

const TicTacToe = () => {
 return (
    <div>
        <h1 className="text-3xl text-center text-white mt-5">Tic Tac Toe </h1>
        <div className="mt-10">
            <TTTBoard />
        </div>
    </div>
 )

}

export default TicTacToe;