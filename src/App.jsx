import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div class="h-1 bg-blue-800"></div>
      <nav class="flex justify-between bg-red-400 h-20" >
        
        <div class="flex justify-between mx-10">
          <div class="mt-3 text-3xl text-white">Kalvium</div>
          <div class="flex mx-10 mt-5 w-60 justify-between text-text-antialiased">
            <h3 class="text-antiWhite">About Us</h3>
            <h3 class="text-antiWhite">Contacts</h3>
            <h3 class="text-antiWhite">Courses</h3>
          </div>
        </div>
        <div class="mx-10 mt-3"><button class=" bg-transparent border-2 border-black rounded-lg text-white w-20 h-10">Login</button></div>
      </nav>
      <main bg-gray-100>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative top-40 left-64">Button One</button>
        <div class="mx-auto max-w-5xl h-16 bg-red-100 h-15vh border border-red-800 flex items-center relative top-52 left-12">
          <p class="text-red-400 mx-10 "><b class="text-red-800 mx-1">Alert!</b>  This is awesome</p>
        </div>
        <div class="flex gap-4 bg-white relative top-80 left-80">
          <div>
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
          </div>
          <div>
            <h1 class="text-3xl">Kalvium Store</h1>
            <p>You have a new course</p>
          </div>
        </div>
      </main>
      <footer class="flex justify-center items-center bg-gray-600 h-20 w-full absolute bottom-0">
        <p class="text-white">@ 2021 Copyright: Kalvium</p>
      </footer>

    </>
  )
}

export default App
