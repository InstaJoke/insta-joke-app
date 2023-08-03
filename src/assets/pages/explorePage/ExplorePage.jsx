import "./exploreStyle.css"
import { useEffect,useState } from "react"
import axios from "axios"

const ExplorePage = ()=> {
    const [memes,setMemes] = useState([])
    const [limit,setLimit] = useState('2')

    const options = {
        method: 'GET',
        url: 'https://memes-from-reddit.p.rapidapi.com/memes/top',
        params:{limit:limit},
        headers: {
          'X-RapidAPI-Key': 'c3ded2cf25mshc554741f85e4dfep1d9b63jsn23564f2e687d',
          'X-RapidAPI-Host': 'memes-from-reddit.p.rapidapi.com'
        }
      };

      
         const getMemes =()=> {
         axios.request(options)
        .then((response)=> setMemes(response.data.data))
        .catch((e)=>console.log(e))
      }
    

      const handleLimit = ()=> {
        setLimit('8')
      }

      useEffect(()=> {
        getMemes()
      },[limit])

    return (
        <div className="main-container">
            <h1>Explore</h1>
            <div className="container-search">
            <input className="search-bar" type="text" placeholder="Search..."></input>
            <button className="btn-search" ><svg style={{width:"1rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                  </svg>
            </button>
            </div>
            <div>
            { memes ? (
                <div className="container-memes">
                {memes.map((ele)=>(
                    <div key={ele.title}>
                        <img className="meme-img" src={ele.url} />
                    </div>
                ))}
                </div>  
              ) : null  }
            </div>
            <button onClick={handleLimit} className="btn-explore">See more...</button>
        </div>
    )
}

export default ExplorePage