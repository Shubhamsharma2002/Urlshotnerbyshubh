import connectDB from "@/libs/db";
import { NextResponse } from "next/server";

export const POST = async()=>{
   

   return NextResponse.json({ message: "This is the GET endpoint" });
}