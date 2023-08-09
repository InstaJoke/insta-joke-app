import { useState } from 'react'
import Logo from "../../components/Logo/Logo"
import './WeeklyJoke.css'
import axios from 'axios';
import SocialInteraction from '../../components/SocialInteractions/SocialInteraction';
import NavBar from '../../components/nav-bar/NavBar';



const WeeklyJoke = () => {

    const weekly = {
      "type": "programming",
      "setup": "What did the router say to the doctor?",
      "punchline": "It hurts when IP."
    }
    const [weeklyJoke, setWeeklyJoke] = useState(weekly);

    const handleWeeklyJoke = () => {
        axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
          setWeeklyJoke(response.data);
        });
      };
    

  return (
    <div className='weekly-joke'>
        <Logo/>
        <h2 className='daily-joke-title'>Weekly Joke</h2>
        <div className='content-joke'>
        {weeklyJoke ? <p className='title-joke'>{weeklyJoke.type.toUpperCase()}</p> : <p>loading..</p>}
        {weeklyJoke ? <p className='joke-line'>{weeklyJoke.setup}</p> : <p>loading..</p>}
        {weeklyJoke ? <p className='joke-line'>{weeklyJoke.punchline}</p> : <p>loading..</p>}
        <button className="btn-weekly" onClick={handleWeeklyJoke}>Random Joke</button>
        </div>
        <SocialInteraction/>
       <footer className='footer'>Copyright &copy; InstaJoke 2023</footer>
       <NavBar/>
    </div>
  )
}

export default WeeklyJoke