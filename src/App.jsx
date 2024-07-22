import icon_logo from "./assets/images/icon-website.svg"
import icon_moon from "./assets/images/icon-moon.svg"
import icon_search from "./assets/images/icon-search.svg"

function App() {
	return (
		<>
      <div className="container">
        <header className="site-header">
          <h1 className="heading-1" style={{fontSize: "1.5rem"}}>devfinder</h1>
          <button className="button" data-type="accent" style={{letterSpacing: "2.5px", gap: "1rem"}}>DARK<img src={icon_moon} alt="Moon" /></button>
        </header>

        <main>
          <div className="search-bar">
            <img src={icon_search} alt="Search" />
            <input type="text" placeholder="Search GitHub username..."/>
            <button className="button" data-type="primary">Search</button>
          </div>

          <div className="card">

          </div>
        </main>

      </div>
		</>
  )
}

export default App
