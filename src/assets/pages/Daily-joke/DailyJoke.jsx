import React, { useState } from 'react'
import './DailyJoke.css'
import { useEffect } from 'react';
import axios from 'axios';
import SocialInteraction from '../../components/SocialInteractions/SocialInteraction';


const DailyJoke = () => {

    const [dailyJoke, setDailyJoke] = useState();

    const options = {
        method: 'GET',
        url: 'https://world-of-jokes1.p.rapidapi.com/v1/jokes/joke-of-the-day',
        headers: {
          'X-RapidAPI-Key': '4e0129f40cmsh800ffe5967cb12dp179c82jsn533929c5a352',
          'X-RapidAPI-Host': 'world-of-jokes1.p.rapidapi.com'
        }
      };
      
    
    const getJoke = () => {
     axios.request(options).then((response)=>{
        console.log(response.data)
     })
    }

    getJoke()

    // useEffect(() => {
    //     getJoke()},[])

  return (
    <div>
        <h2 className='daily-joke-title'>Daily Joke</h2>
        <div className='content-joke'>
            <p></p>
            <p></p>
        </div>
        <SocialInteraction/>
       
       
    </div>
  )
}

export default DailyJoke