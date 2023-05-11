"use client"
import * as _ from "lodash"
import {useState, useEffect} from 'react'

interface Props {
    character: Avatar[];
}

export default function Character({character}:Props) {
    const [isChosen, setIsChosen] = useState<boolean>(false)
    const [characterArray, setCharacterArray] = useState<Avatar[]>([])

    const chooseRandom = (arr: Avatar[]) => {
        const res = []
        for(let i =0; i<10;) {
            const random = Math.floor(Math.random()*arr.length)
            if(res.indexOf(arr[random]) !== -1){
                continue;
            };
             res.push(arr[random]);
             i++;
        };
          return res;
    }

    const handleClick = (id:number,order:number) => {
        console.log(id)
        if(id===order){
            setIsChosen(prevState => !prevState)
        }
        return;
    }
    const results = chooseRandom(character)

    function duplicate(array:Avatar[], duplicator:number){
        var buildArray = [];
        for(let i=0; i<array.length; i++){
                for(let j=0; j<duplicator; j++){
                        buildArray.push(array[i]);
                }
        }
        return buildArray;
    }

    const finalArray = duplicate(results,2)

    const shuffledArray = () => {
        setCharacterArray(_.shuffle(finalArray))
    }
        
    useEffect(()=>{
        shuffledArray()
    },[])

    const content = characterArray.map((char,i) => {
        return (
        <div 
        key={i} 
        className="w-21 h-21 border-solid border-2 border-slate-900"
        onClick={()=>handleClick(char.order,char.order)}
        >
            <img src={char.images.portrait} rel="preload" alt="super smash bros. character"
            className="h-21 w-21"/>
        
        </div>
        )
    })

    return (
        <>
        {content}
        </>
        )
}