import connectDB from "@/libs/db";
import ShortURL from "@/models/Shorturl";

import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();

  const body = await req.json();

  const { url, shorturl } = body;

  if (!url || !shorturl) {
    return NextResponse.json({
      success: false,
      error: true,
      message: "Missing required fields: url or shorturl",
    }, { status: 400 });
  }

  const existing = await ShortURL.findOne({ shortCode: shorturl });

  if (existing) {
    return NextResponse.json({
      success: false,
      error: true,
      message: "Short URL already exists!",
    }, { status: 409 });
  }

  const result = await ShortURL.create({
    originalURL: url,
    shortCode: shorturl,
  });

  return NextResponse.json({
    success: true,
    error: false,
    message: "URL generated successfully",
    data: result,
  });
};
