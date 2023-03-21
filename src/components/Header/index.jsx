
// export default function Header(props) {
export default function Header({page, pageHandler}) { // a može se odmah ovdje i destriktirirati
    return (
      <header>
        <button onClick={ pageHandler }>Go to {page === "Home" ? "About" : "Home"}</button>
      </header>
    )
}