"use client"
import * as _ from "lodash"
import {useState, useEffect} from 'react'

interface Props {
    characters: Avatar[];
}

export default function Character({characters}:Props) {
    // const [isChosen, setIsChosen] = useState<boolean>(false)
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

    const handleClick = (id:number) => {
        console.log(id)
        
    }
    const results = chooseRandom(characters)

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
        className="bg-blue-950"
        onClick={()=>handleClick(char.order)}
        >   
            <div>
                <img src={char.images.portrait} rel="preload" alt="super smash bros. character"
                className="w-full h-full object-scale-down"/>
            </div>
            
                
        </div>
        )
    })

    return (
        <>
        {content}
        </>
    )
}