"use client"
import * as _ from "lodash"
import Image from "next/image";
import {useState, useEffect} from 'react'

interface Props {
    characters: Avatar[];
}

export default function Character({characters}:Props) {
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

    const handleClick = (id:number, index: number) => {
        console.log(id)
        console.log(index)
        const updatedArray = [...characterArray];
        updatedArray[index].isChosen = !updatedArray[index].isChosen;
        setCharacterArray(updatedArray);
        console.log(updatedArray)
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
        className="bg-blue-950 cursor-pointer"
        onClick={()=>handleClick(char.order,i)}
        >   
            <div>
                {char.isChosen?
                <Image src={char.images.portrait} width={100} height={100} alt="Super smash bros. character"/> :
                <div className="h-full w-21 bg-blue-500 flex items-center justify-center">
                    Memory Super Smash Bros.
                </div>}
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