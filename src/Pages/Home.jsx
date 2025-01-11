import React, { useRef, useState } from 'react'

const Home = () => {

  
  return (

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Anand's Homepage</h1>
        <p className="text-gray-600 mt-2 text-lg">A place to explore and learn</p>
      </header>

      {/* Content Section */}
      <main className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hello! My name is <strong>Anand</strong>. This is my personal homepage
          where I share ideas, projects, and things I find interesting. Feel free to look around and get in touch!
        </p>
      </main>

      {/* Footer Section */}
      <footer className="text-center mt-12 text-gray-600">
        <p>&copy; {new Date().getFullYear()} Anand Gupta. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
