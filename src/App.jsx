import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App(){
  const [page, setPage] = useState("Home")

  const pageHandler = () => {
    if (page === "Home") {
      setPage("About")
    } else {
      setPage("Home")
    }
  }
  return (
    <div className="App">
      <Header pageHandler={pageHandler} page={page}/>
      <Main page={page}/>
    </div>
  )
}

export default App
