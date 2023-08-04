import NavBar from "./assets/components/nav-bar/NavBar"
import ExplorePage from "./assets/pages/explorePage/ExplorePage"
import SignInPage from "./assets/pages/sign-in-page/Sign-in-page"
import WeeklyJoke from "./assets/pages/Weekly-joke/WeeklyJoke"
import SignUpPage from "./assets/pages/sign-up-page/Sign-up-page"

import { Routes,Route } from "react-router-dom"
import "./App.css"


function App() {

  return (
    <article>
      <Routes>
        <Route path="/" element={<SignInPage/>} />
        <Route path="/explore" element={<ExplorePage />}/>
        <Route path="/weekly" element={<WeeklyJoke/>}/>
        <Route path="/register" element={<SignUpPage />}/>
      </Routes>
      <NavBar />
    </article>
  )
}

export default App
