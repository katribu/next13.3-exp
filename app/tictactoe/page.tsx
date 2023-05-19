import { Metadata } from "next";
import TTTBoard from "./components/TTTBoard";

export const metadata: Metadata = {
    title: "Tic-Tac-Toe",
    description: 'Tic-tac-toe game',
}

const TicTacToe = () => {
 return (
    <div className="text-center text-white">
        <h1 className="text-3xl mt-5">Tic Tac Toe </h1>
        <p className="text-md">Player 1: <strong>O</strong> Player 2: <strong>X</strong></p>
        <div className="mt-10">
            <TTTBoard />
        </div>
    </div>
 )

}

export default TicTacToe;