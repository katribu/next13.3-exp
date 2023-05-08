

const getData = async () => {
const res = await fetch('https://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters')
if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();

}

type Avatars = {
        alsoAppearsIn: [];
        availability: string;
        images: {
          icon: string;
          portrait: string;   
        },
        name: string;
        order: number;
        series: {
          icon: string;
          name: string;
        }
      }[];

const Memory = async () => {
    const results: Avatars = await getData()
    const chars  =  results?.slice(0,15)?.map((avatar) => (
        <div key={avatar.order} className="w-20 h-20 border-solid border-2 border-slate-900">
            <img src={avatar.images.portrait} />
        </div>
    ))


    return (
        <>
        <div className="text-white text-center">
            <h1 className="text-3xl">Memory Game</h1>
            <p>Match every card with it's pair in the least amount of tries possible</p>

            <div className="border-white border-2 border-solid grid grid-cols-5 gap-3 w-3/5 place-content-center my-0 mx-auto gap-x-0 ">
                {chars}
            </div>

        </div>
        </>
    )
}

export default Memory;