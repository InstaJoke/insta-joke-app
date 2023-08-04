import NavBar from "./assets/components/nav-bar/NavBar"
import ExplorePage from "./assets/pages/explorePage/ExplorePage"
import Logo from "./assets/components/logo/logo"
import WeeklyJoke from "./assets/pages/Weekly-joke/WeeklyJoke"

import { Routes,Route } from "react-router-dom"
import "./App.css"


function App() {

  return (
    <article>
      <Logo/>
      <Routes>
        <Route path="/explore" element={<ExplorePage />}/>
        <Route path="/weekly" element={<WeeklyJoke/>}/>

      </Routes>
      <NavBar />
    </article>
  )
}

export default App
