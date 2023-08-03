import React, { useState } from 'react'
import './DailyJoke.css'
import { useEffect } from 'react';
import axios from 'axios';
import SocialInteraction from '../../components/SocialInteractions/SocialInteraction';


const DailyJoke = () => {

    const [dailyJoke, setDailyJoke] = useState();

    const getDailyJoke = () => {
        axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
          setDailyJoke(response.data);
        });
      };
    
      useEffect(() => {
        getDailyJoke();
      }, []);
      
   

  return (
    <div>
        <h2 className='daily-joke-title'>Daily Joke</h2>
        <div className='content-joke'>
        {dailyJoke ? <p>{dailyJoke.type}</p> : <p>loading..</p>}
        {dailyJoke ? <p>{dailyJoke.setup}</p> : <p>loading..</p>}
        {dailyJoke ? <p>{dailyJoke.punchline}</p> : <p>loading..</p>}
        </div>
        <SocialInteraction/>
       
       
    </div>
  )
}

export default DailyJoke