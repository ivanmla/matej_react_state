import { useState } from 'react'
import './App.css'
import Ugnjezdena from './components/Ugnjezdena'

function App() {
  const [text, setText] = useState("Matej")
  
  const toggleText = () => {
    if (text === "Matej") {
        setText("Pavic")
    } else {
      setText("Matej")
      }
    }
  
  const label = text === "Matej" ? "Ime" : "Prezime"

  return (
    <div className="App">
      <span onMouseOver={toggleText} onMouseOut={toggleText}>{ label } : { text }</span>
      <Ugnjezdena text={text}/>
    </div>
  )
}

export default App