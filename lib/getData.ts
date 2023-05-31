 export const getData = async () => {
    const res = await fetch('http://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters')
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
      }
     
      return res.json();
    
    }