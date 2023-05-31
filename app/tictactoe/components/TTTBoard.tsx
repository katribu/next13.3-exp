'use client'

import { useState,useEffect, } from 'react'
import Confetti from 'react-confetti'

enum Player {
    One = 'O',
    Two = 'X'
}

const data = [
<div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>,
<div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>,
<div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>,
<div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>,
<div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>,
<div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>,
<div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>,
<div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>,
<div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>
]

export default function TTTBoard() {

    const [isPlayerOne, setIsPlayerOne] = useState<boolean>(true)
    const [gameBoard, setGameBoard] = useState<(JSX.Element | undefined)[]>(data)
    const [whoWon, setWhoWon] = useState<string>('')
    const [winner, setWinner] = useState<boolean>(false)
    const [noWinner, setNoWinner] = useState<string>('')

    const handleClick = (index:number) => {
        const updatedBoard = gameBoard.map((div,i)=> {
            if(i === index && isPlayerOne){
                setIsPlayerOne(prevState => !prevState)
                return <div className="bg-blue-400 w-15 h-10 flex justify-center items-center">
                {Player.One}</div>
            } else if (i === index && !isPlayerOne){
                setIsPlayerOne(prevState => !prevState)
                return <div className="bg-blue-400 w-15 h-10 flex justify-center items-center">
                {Player.Two}</div>
            } else {
                return div
            }
        })
        setGameBoard(updatedBoard)
    }
    
    const checkWinner = () => {
        const mappedChildren = gameBoard.map(div => div?.props.children)

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (mappedChildren[a] && mappedChildren[a] === mappedChildren[b] && mappedChildren[a] === mappedChildren[c]) {
                setWinner(true);
                setWhoWon(mappedChildren[a]);
                setIsPlayerOne(true)
                setTimeout(()=>{
                    setWinner(false)
                    setGameBoard(data)
                },4000);
            }
            if(!mappedChildren.includes(undefined)){
                setNoWinner('Nobody won, try again 😥')
                setTimeout(()=>{
                    setWinner(false)
                    setGameBoard(data)
                    setNoWinner('')
                    setIsPlayerOne(true)
                },4000);
            }
        }
        return null;

    }

    useEffect(()=>{
        checkWinner()
    },[gameBoard])

    const content = gameBoard.map((div,i) => (
        <div onClick={()=>handleClick(i)} key={i}>
            {div}
        </div>
    ))

    return (
        <>
        <div className="grid grid-cols-3 bg-slate-900 w-1/5 mx-auto gap-3 text-white place-content-center cursor-pointer font-bold">
          {content}
        </div>
        { winner ?  
        <div>
         <h2> Congrats to Player {whoWon === 'O' ? "One" : "Two"}! You Won!!</h2>
         <Confetti width={window.innerWidth} height={window.innerHeight} />
         </div> :
         <h2 className="text-lg font-bold"> {noWinner} </h2>}
        </>
    )
}