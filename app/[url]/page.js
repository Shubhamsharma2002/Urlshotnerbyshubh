import connectDB from "@/libs/db";
import ShortURL from "@/models/Shorturl";
import { redirect } from "next/navigation";

const Page = async ({ params }) => {
    const { url } = await params; 

    // console.log("Received short URL:", url); // Log the received short URL

    await connectDB(); // Connect to the database

    // Query the database using the correct field name (shortCode instead of shorturl)
    const existing = await ShortURL.findOne({ shortCode: url });

    // console.log("Database Result:", existing); // Log the result from the database

    if (existing) {
        // If we found a matching short URL, redirect to the corresponding full URL
        return redirect(existing.originalURL); // Make sure to use the correct field for the original URL
    } else {
        // If not found, redirect to the home page
        return redirect(process.env.NEXT_PUBLIC_HOST);
    }
};

export default Page;
