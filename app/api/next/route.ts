import { NextResponse } from "next/server"

type Info = {
    name?: string;
    age?: number;
    isMarried?: boolean;
}

export async function GET() {
    return NextResponse.json({"message":"There is a lot to learn"})
}

export async function POST(request: Request){
    const data:Info = await request.json()

    const {name,age,isMarried} = data
    return NextResponse.json({name,age,isMarried})
}
