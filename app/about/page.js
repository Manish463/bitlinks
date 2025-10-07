import React from 'react'

const About = () => {
  return (
    <div className="max-w-3xl mx-4 md:mx-auto p-6 bg-purple-100 rounded-lg my-8">
      <h1 className="text-3xl font-bold mb-4 poppins">About URL Shortener</h1>
      <p className="text-gray-700 mb-4">
        Our URL Shortener is a simple and efficient tool to convert long, messy
        links into short, easy-to-share URLs. It helps you keep your links clean
        and manageable while saving time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Instant short link generation</li>
        <li>Custom short URLs</li>
        <li>Link analytics (click count, creation date)</li>
        <li>Clean and simple UI</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Built With</h2>
      <p className="text-gray-700 mb-4">
        Next.js, MongoDB, Tailwind CSS, and Node.js.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Developer</h2>
      <p className="text-gray-700">
        Developed by <strong>Manish Kumar Sharma</strong> — a web developer who loves
        creating practical, user-friendly tools for the web.
      </p>
    </div>
  )
}

export default About
