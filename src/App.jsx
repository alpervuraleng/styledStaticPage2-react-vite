import './App.css'
import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <p style={{fontSize: 30, fontFamily: "Inter"}}>Test</p>
    </div>
  )
}
