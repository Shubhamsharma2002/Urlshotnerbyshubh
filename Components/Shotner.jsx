"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shotner = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshortUrl] = useState("");
  const [genrated, setgenrated] = useState("");

  const genrateurl = async () => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const result = await response.json();
      console.log("API Result:", result);

      if (result.success) {
        setgenrated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshortUrl("");
        alert(result.message);
      } else {
        alert(result.message || "Error creating short URL");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while generating the URL.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center">URL Shortener</h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          genrateurl();
        }}
      >
        <input
          type="text"
          value={url}
          onChange={(e) => seturl(e.target.value)}
          placeholder="Enter your URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={shorturl}
          onChange={(e) => setshortUrl(e.target.value)}
          placeholder="Preferred short URL text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Shorten URL
        </button>
      </form>

      {genrated && (
        <div className="mt-4 text-center">
          <span className="font-bold text-lg">Your Link: </span>
          <code>
            <Link target="_blank" href={genrated} className="text-blue-600 underline">
              {genrated}
            </Link>
          </code>
        </div>
      )}
    </div>
  );
};

export default Shotner;
