import getSearchResults from "@/lib/getSearchResults";
import Link from "next/link";

interface Props {
    params: {
        searchTerm: string;
    }
}

//can make Metadata either throught static import (metadata:Metadata) or dynamically as a NextJS function generateMetadata
export async function generateMetadata({params: {searchTerm}} :Props) {
    //OK to have the same fetch request twice since NextJS "dedups" the code (ie. gets rid of duplicate code automatically)
    const wikiData : Promise<SearchResult> = getSearchResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20',' ')

    if(!data?.query?.pages){
        return {
            title: `${displayTerm} not found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}


export default async function page({params: {searchTerm}} : Props) {
    const wikiData : Promise<SearchResult> = getSearchResults(searchTerm)
    const data = await wikiData
    const result:Result[] | undefined = data?.query?.pages



    const content = (
        <main className="bg-blue-600 mx-auto max-w-lg py-1 min-h-screen text-white">
            {result ? 
            Object.values(result).map(res => {
              return  (
            <article className="p-5" key={res.pageid}>
              <h2 className="font-bold hover:underline"><Link href={`https://en.wikipedia.org/?curid=${res.pageid}`} target="_blank">{res.title}</Link></h2>
              <p>{res.extract}</p>
              </article>
              )
            }) :
            <p>{`${searchTerm} not found.`}</p>  
        }
        </main>
    )

    return content
}