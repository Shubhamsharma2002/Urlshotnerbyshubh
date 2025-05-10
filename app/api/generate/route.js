import { NextResponse } from "next/server";

export const POST = ()=>{
   return NextResponse.json({ message: "This is the GET endpoint" });
}