import Home from '../Home'
import About from '../About'

export default function Main({page}) {
    return (
      <main>
        {
          page === "Home" ? 
          <Home /> :
          <About />
        }
      </main>
    )
}