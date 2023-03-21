import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     page: "Home"
  //   }
  //}
  const [page, setPage] = useState("Home")// useStete vraća array - prva vrijednost će biti home, a drugi element funkcija koja mijenja taj žHome
  
  const pageHandler = () => {
    if (page === "Home") {
        setPage("About")
    } else {
        setPage("Home")
      }
    }

  return (
    <div className="App">
      <Header pageHandler={ pageHandler } page={ page }/>
      <Main page={ page }/>
      <Counter />
    </div>
  )
}

export default App
