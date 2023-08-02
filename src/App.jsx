import NavBar from "./assets/components/nav-bar/NavBar"
import ExplorePage from "./assets/pages/explorePage/ExplorePage"
import { Routes,Route } from "react-router-dom"
import "./App.css"

function App() {

  return (
    <article>
      <Routes>
        <Route path="/explore" element={<ExplorePage />}/>
      </Routes>
      <NavBar />
    </article>
  )
}

export default App
