import { useState } from 'react'
import './App.css'

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
    </div>
  )
}

export default App