"use client"
import React, { useState } from "react";

const Shotner = () => {
  const [url,seturl] = useState("")
  const [shorturl , setshortUrl] = useState("")
  
  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-md   rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center">URL Shortener</h2>
      <form className="space-y-4">
        <input
          type="text"
          value={url}
          onChange={e=>{seturl(e.target.value)}}
          placeholder="Enter your URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={shorturl}
          onChange={e=>{setshortUrl(e.target.va)}}
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
    </div>
  );
};

export default Shotner;
