interface Props {
    characters: Avatars;
}

export default function Character({characters}:Props) {
    const chooseRandom = (arr: Avatars) => {
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

    const results = chooseRandom(characters)

    function duplicate(array:Avatars, duplicator:number){
        var buildArray = [];
        for(let i=0; i<array.length; i++){
                for(let j=0; j<duplicator; j++){
                        buildArray.push(array[i]);
                }
        }
        return buildArray;
    }

    const finalArray = duplicate(results,2)
    const content = finalArray.map(char => {
        return (
        <div key={char.order} className="w-20 h-20 border-solid border-2 border-slate-900">
            <img src={char.images.portrait} />
        </div>
        )
    })

    return (
        <>
        {content}
        </>
        )
}