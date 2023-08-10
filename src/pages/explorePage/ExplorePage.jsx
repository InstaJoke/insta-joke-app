import "./exploreStyle.css"
import Logo from '../../components/Logo/Logo'
import { useEffect,useState } from "react"
import axios from "axios"
import NavBar from "../../components/nav-bar/NavBar"

const ExplorePage = ()=> {
    const [memes,setMemes] = useState([])
    const [limit,setLimit] = useState(3)

    const options = {
        method: 'GET',
        url: 'https://memes-from-reddit.p.rapidapi.com/memes/top',
        mode:'cors',
        params:{limit:limit},
        headers: {
          'X-RapidAPI-Key': 'daa435a9a2msh694f34f66f41d8dp1342eajsn9512db48cff2',
          'X-RapidAPI-Host': 'memes-from-reddit.p.rapidapi.com'
        }
      };

      const getMemes = ()=> {
            axios.request(options)
            .then(response => setMemes(response.data.data))
            .catch((error) => console.error(error))
      }

      const handleLimit = ()=> {
        setLimit(limit + 3)
      }

      useEffect(()=> {
        getMemes()
      },[limit])





    return (
      <div>
      <Logo />
      <div className="main-container">
            <h1>Explore</h1>
            <div className="container-search">

            <input className="search-bar" 
            type="text" 
            placeholder="Search..."
            ></input>
            <button className="btn-search" ><svg style={{width:"1rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                  </svg>
            </button>
            </div>
            <div>
            { memes ? (
                <div className="cards">
                {memes.map((ele)=>(
                    <div className="card" key={ele.title}>
                        <img 
                        className="meme-img" src={ele.url}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = "https://easyfamilyfun.com/wp-content/uploads/2022/10/Funny-animal-memes-88.jpeg";
                        }}
                        />
                    </div>
                ))}
                </div>  
              ) : null  }
            </div>
              <button onClick={handleLimit} className="btn-explore">See more...</button>
            
        </div>
        <NavBar/>
        </div>
    )
}

export default ExplorePage