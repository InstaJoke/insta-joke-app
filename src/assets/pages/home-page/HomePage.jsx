import Logo from "../../components/Logo/Logo"
import NavBar from "../../components/nav-bar/NavBar"
import SocialInteraction from "../../components/SocialInteractions/SocialInteraction"
import { useEffect,useState } from "react"
import axios from "axios"
import './homePageStyle.css'

/*--------------------RANDOM MEMES----------*/
const randomMemes = [{image:"https://www.momtastic.com/wp-content/uploads/sites/5/gallery/pet-memes/meme-10.jpg"},
{image:"https://easyfamilyfun.com/wp-content/uploads/2022/10/Funny-animal-memes-88.jpeg"},
{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ykfw9tTi3RhfMzFP69dJ_9WkssdFEcFFvQ&usqp=CAU"},{image:"https://energizeworcester.wp.worc.ac.uk/wp-content/uploads/2015/02/no1-225x300.jpg"}]
/*--------------------RANDOM MEMES----------*/

const HomePage = ()=> {



/*--------------------DEFAULT MEMES----------*/
  const [defaultMemes,setMemes] = useState([])
  const [indx,setIndx] = useState(6)

    const mainMemes = {
        method: 'GET',
        url: 'https://memes-from-reddit.p.rapidapi.com/memes/',
        headers: {
          'X-RapidAPI-Key': '4e0129f40cmsh800ffe5967cb12dp179c82jsn533929c5a352',
          'X-RapidAPI-Host': 'memes-from-reddit.p.rapidapi.com'
        }
      };


      const getMemes = ()=> {
            axios.request(mainMemes)
            .then(response => setMemes(response.data.data[indx].url))
            .catch((error) => console.error(error))
      }
      useEffect(()=> {
        getMemes()
      },[indx])

/*----------------------------------------------------*/


const [toggle,setToggle] = useState(0)

const updateToggle = (id) =>{
  setToggle(id)
}

/*--------------------RANDOM MEMES----------*/
const [random, setRandom] = useState(randomMemes[0])


/*--------------------RANDOM MEMES----------*/

    return (
        <>
          <Logo />
            <div className="content-home">
              <h1 className="header">Categories</h1>
              <div className="btn-categories">
                <button className="btn" onClick={()=> updateToggle(1)}>Trending</button>
                <button className="btn" onClick={()=>updateToggle(2)} >Random</button>
                <button className="btn" onClick={()=>updateToggle(3)}>Text Memes</button>
              </div>
            </div>

        <div className={toggle == 0 ? "show-content" : "content"}>
          <img className="img-content" style={{width:'100%'}} src={defaultMemes}
            
            ></img> 
       <div className="container-btn">
            <button className="btn-content" onClick={()=>setIndx(indx-1)} >
              <svg style={{width:"2rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
              </svg>
            </button>

            <button className="btn-content" onClick={()=>setIndx(indx+1)} >
              <svg style={{width:"2rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div> 
        </div>
  

      
        {/* ------------Random Memes----------- */}
        <div className={toggle == 2 ? "show-content" : "content"}>
         
         <div>
           <img style={{width:"100%"}} src={random.image} alt="fhf"></img>
         </div>
         <div className="container-btn">
             <button className="btn-content" onClick={()=>setIndx(indx-1)} >
               <svg style={{width:"2rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
               </svg>
             </button>
 
             <button className="btn-content" onClick={()=>setIndx(indx+1)} >
               <svg style={{width:"2rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
               </svg>
             </button>
           </div>
 
 
         </div>
         {/* ------------Random Memes------------ */}
      <SocialInteraction/>
      <NavBar />
        </>
    )
}
//      

export default HomePage