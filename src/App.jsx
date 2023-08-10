
import ExplorePage from './pages/explorePage/ExplorePage'
import SignInPage from "./pages/sign-in-page/Sign-in-page"
import WeeklyJoke from "./pages/Weekly-joke/WeeklyJoke"
import SignUpPage from "./pages/sign-up-page/Sign-up-page"
import ProfilePage from "./pages/Profile-page/ProfilePage"
import HomePage from "./pages/home-page/HomePage"
import { Routes,Route } from "react-router-dom"
import "./App.css"


function App() {

  return (
    <article>
      <Routes>
        <Route path="/" element={<SignInPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/explore" element={<ExplorePage />}/>
        <Route path="/weekly" element={<WeeklyJoke/>}/>
        <Route path="/register" element={<SignUpPage />}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>

    </article>
  )
}

export default App
