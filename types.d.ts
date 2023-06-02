type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }
}

type SearchResult = {
    query?: {
        pages?: Result[],
    },
}

type Avatar = {
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
    },
    isChosen: boolean
}