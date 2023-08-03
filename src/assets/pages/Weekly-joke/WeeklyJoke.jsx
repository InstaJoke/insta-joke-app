import { useState } from 'react'
import './WeeklyJoke.css'
import axios from 'axios';
import SocialInteraction from '../../components/SocialInteractions/SocialInteraction';


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
    <div>
        <h2 className='daily-joke-title'>Weekly Joke</h2>
        <div className='content-joke'>
        {weeklyJoke ? <p>{weeklyJoke.type}</p> : <p>loading..</p>}
        {weeklyJoke ? <p>{weeklyJoke.setup}</p> : <p>loading..</p>}
        {weeklyJoke ? <p>{weeklyJoke.punchline}</p> : <p>loading..</p>}
        <button className="btn-weekly" onClick={handleWeeklyJoke}>Random Joke</button>
        </div>
        <SocialInteraction/>
       
       
    </div>
  )
}

export default WeeklyJoke