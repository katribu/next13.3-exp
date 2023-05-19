'use client'

import { useState } from 'react'

export default function TTTBoard() {

    const [isPlayerOne, setIsPlayerOne] = useState<boolean>(true)

    const handler = (e:any) => {
        if(e.target === e.currentTarget){
            return;
        }
        else if (isPlayerOne){
            e.target.innerHTML = 'O'
            setIsPlayerOne(prevState => !prevState)
        }
        else if (!isPlayerOne){
            e.target.innerHTML = 'X'
            setIsPlayerOne(prevState => !prevState)
        }
    }

    return (
        <div className="grid grid-cols-3 bg-slate-900 w-1/5 mx-auto gap-3 text-white place-content-center cursor-pointer font-bold"
        onClick={handler}>
          
            <div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>
            <div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>
            <div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>
            <div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>
            <div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>
            <div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>
            <div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>
            <div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>
            <div className="bg-blue-400 w-15 h-10 flex justify-center items-center"></div>

        </div>
    )
}