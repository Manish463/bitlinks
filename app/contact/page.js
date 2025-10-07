import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-lg mx-4 md:mx-auto p-6 my-8 rounded-lg bg-purple-100">
      <p className='text-red-600'><b>*</b> This page is not working for now</p>
      <h1 className="text-3xl font-bold mb-4 poppins">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have feedback, questions, or suggestions? Fill out the form below or
        reach out directly — I’d love to hear from you!
      </p>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded-md bg-white focus:outline-purple-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded-md bg-white focus:outline-purple-600"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 rounded-md resize-none bg-white focus:outline-purple-600"
          rows={4}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-gray-700">
        <p>Email: <a href="mailto:manish@example.com" className="text-purple-700 underline">manish@example.com</a></p>
        <p>
          Github:{" "}
          <a href="https://github.com/Manish463" target='_blank' className="text-purple-700 underline">
            https://github.com/Manish463
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
