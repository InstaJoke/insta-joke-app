import NavBar from "./assets/components/nav-bar/NavBar"
import ExplorePage from "./assets/pages/explorePage/ExplorePage"
import SignInPage from "./assets/pages/sign-in-page/Sign-in-page"
import WeeklyJoke from "./assets/pages/Weekly-joke/WeeklyJoke"
import ProfilePage from "./assets/pages/Profile-page/ProfilePage"

import { Routes,Route } from "react-router-dom"
import "./App.css"


function App() {

  return (
    <article>
      <Routes>
        <Route path="/explore" element={<ExplorePage />}/>
        <Route path="/" element={<SignInPage/>} />
        <Route path="/weekly" element={<WeeklyJoke/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>

      </Routes>
      <NavBar />
    </article>
  )
}

export default App
