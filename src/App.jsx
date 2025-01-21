import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Bootombar from './components/Bootombar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main >
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>

      <Bootombar/>
    </div>
  )
}

export default App
