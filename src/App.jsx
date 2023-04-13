import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from '../components/Main.jsx'
import Navbar from '../components/Navbar.jsx'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
    </div>
  )
}
