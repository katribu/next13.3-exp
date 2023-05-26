'use client'

import { useState,useEffect } from 'react'

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
    const [winner, setWinner] = useState<boolean>(false)

    const handleClick = (index:number) => {
        const updatedBoard = gameBoard.map((div,i)=> {
            if(i === index && isPlayerOne){
                setIsPlayerOne(prevState => !prevState)
                return <div className="bg-blue-400 w-15 h-10 flex justify-center items-center">
                O</div>
            } else if (i === index && !isPlayerOne){
                setIsPlayerOne(prevState => !prevState)
                return <div className="bg-blue-400 w-15 h-10 flex justify-center items-center">
                X</div>
            } else {
                return div
            }
        })
        setGameBoard(updatedBoard)
    }
    
    const checkWinner = () => {
        const mappedChildren = gameBoard.map(div => div?.props.children)
        
        const row1 = mappedChildren[0]==mappedChildren[1] && mappedChildren[0]==mappedChildren[2]
        const row2 = mappedChildren[3]==mappedChildren[4] && mappedChildren[3]==mappedChildren[5]
        const row3 = mappedChildren[6]==mappedChildren[7] && mappedChildren[6]==mappedChildren[8]

        const col1 = mappedChildren[0]==mappedChildren[3] && mappedChildren[0]==mappedChildren[6]
        const col2 = mappedChildren[1]==mappedChildren[4] && mappedChildren[1]==mappedChildren[7]
        const col3 = mappedChildren[2]==mappedChildren[5] && mappedChildren[2]==mappedChildren[8]

        const diag1 = mappedChildren[0]==mappedChildren[4] && mappedChildren[0]==mappedChildren[8]
        const diag2 = mappedChildren[2]==mappedChildren[4] && mappedChildren[2]==mappedChildren[6]
        
        console.log(mappedChildren)
        if(row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2){
            setWinner(true)
        }else {
            return;
        }

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
        { winner && <h2>The winner is Player?? </h2>}
        </>
    )
}