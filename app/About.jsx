import React from 'react';

function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 border-2 border-blue-500 rounded-2xl shadow-lg text-center">
      {/* Profile Image */}
      <img
        src="/path-to-your-image.jpg" // Replace with your image path or URL
        alt="Developer Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300 object-cover"
      />

      {/* About Section */}
      <h2 className="text-2xl font-bold mb-4 text-blue-700">About the Developer</h2>
      <p className="text-gray-800 mb-6 text-justify">
        I’m a passionate Full Stack MERN Developer with hands-on experience in building scalable web applications using MongoDB, Express.js, React, and Node.js. 
        My expertise spans both frontend and backend development, along with deployment and infrastructure management using AWS services such as EC2, S3, and RDS. 
        I thrive on turning complex problems into elegant solutions and building high-quality, user-friendly products.
      </p>

      {/* Contact Section */}
      <h3 className="text-xl font-semibold mb-4 text-blue-600">Contact Me</h3>
      <div className="flex flex-wrap justify-center gap-6 text-blue-800">
        <a
          href="mailto:your.email@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-lg shadow hover:bg-blue-200 transition"
        >
          📧 Gmail
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-lg shadow hover:bg-pink-200 transition"
        >
          📷 Instagram
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-lg shadow hover:bg-blue-200 transition"
        >
          💼 LinkedIn
        </a>
      </div>
    </div>
  );
}

export default About;
