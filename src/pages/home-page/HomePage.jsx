/* eslint-disable react-hooks/exhaustive-deps */
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/nav-bar/NavBar";
import SocialInteraction from "../../components/SocialInteractions/SocialInteraction";
import { useEffect, useState } from "react";
import axios from "axios";
import "./homePageStyle.css";
/*--------------------RANDOM MEMES----------*/
const randomMemes = [
  {
    image:
      "https://www.momtastic.com/wp-content/uploads/sites/5/gallery/pet-memes/meme-10.jpg",
  },
  {
    image:
      "https://easyfamilyfun.com/wp-content/uploads/2022/10/Funny-animal-memes-88.jpeg",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ykfw9tTi3RhfMzFP69dJ_9WkssdFEcFFvQ&usqp=CAU",
  },
  {
    image:
      "https://energizeworcester.wp.worc.ac.uk/wp-content/uploads/2015/02/no1-225x300.jpg",
  },
];
/*--------------------RANDOM MEMES----------*/
const HomePage = () => {

  /*--------------------DEFAULT MEMES----------*/
  const [defaultMemes, setDefaultMemes] = useState();
  const [indx, setIndx] = useState(0);
  
  const mainMemes = {
    method: "GET",
    url: "https://memes-from-reddit.p.rapidapi.com/memes/",
    headers: {
      'X-RapidAPI-Key': 'daa435a9a2msh694f34f66f41d8dp1342eajsn9512db48cff2',
      'X-RapidAPI-Host': 'memes-from-reddit.p.rapidapi.com'
    },
  };
  const getMemes = () => {
    axios
      .request(mainMemes)
      .then((response) => {

        setDefaultMemes(response.data?.data[indx]?.url);
      })
      .catch((error) => {
        console.error(error);

        setDefaultMemes(
          randomMemes[Math.floor(Math.random() * (4 - 0 + 1)) + 0]
        );
      });
  };
  useEffect(() => {
    getMemes();
  }, [indx]);
  /*----------------------------------------------------*/
  const [toggle, setToggle] = useState(0);
  const updateToggle = (id) => {
    setToggle(id);
  };
  /*--------------------RANDOM MEMES----------*/
  const [random, setRandom] = useState(randomMemes[0]);
  const getMemeRandom = () => {
    axios.get('https://meme-api.com/gimme').then((response)=>{setRandom(response.data.url)})
  }

  /*--------------------RANDOM MEMES----------*/
  const [textJoke, setTextJoke] = useState();
  const getTextJoke = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        console.log(response.data);
        setTextJoke(response.data);
      });
  };
  useEffect(() => {
    switch (toggle) {
      case 0:
        console.log(toggle);
        break;
      case 1:
        setTextJoke();
        getMemes();
        break;
      case 2:
        console.log("case 2");
        //! case of random api joke
        setRandom();
        getMemeRandom();
        break;
      case 3:
        console.log("case 3");
        setDefaultMemes();
        getTextJoke();
        break;
      default:
        console.log("default");
        setDefaultMemes(randomMemes[0]);
        break;
    }
  }, [toggle]);
  return (
    <>
      <Logo />
      <div className="content-home">
        <h1 className="header">Categories</h1>
        <div className="btn-categories">
          <button className="btn" onClick={() => updateToggle(1)}>
            Trending
          </button>
          <button className="btn" onClick={() => updateToggle(2)}>
            Random
          </button>
          <button className="btn" onClick={() => updateToggle(3)}>
            Text Memes
          </button>
        </div>
      </div>
      {defaultMemes &&
      (toggle === 0 || toggle === 1) &&
      textJoke === undefined ? (
        <div className="show-content">
          {defaultMemes ? (
            <img
              className="img-content"
              src={defaultMemes}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = random.image;
              }}
              alt="default meme image"
            />
          ) : (
            <img
              className="img-content"
              src={random.image}
              alt="default meme image"
            />
          )}
          <div className="container-btn">
            <button className="btn-content" onClick={() => setIndx(indx - 1)}>
              <svg
                style={{ width: "2rem" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="btn-content" onClick={() => setIndx(indx + 1)}>
              <svg
                style={{ width: "2rem" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : textJoke && toggle === 3 ? (
        <>
          <div className="content-joke">
            {textJoke ? <p>{textJoke.setup}</p> : <p>loading..</p>}
            {textJoke ? <p>{textJoke.punchline}</p> : <p>loading..</p>}
            <button className="btn-weekly" onClick={getTextJoke}>
              Random Joke
            </button>
          </div>
        </>
      ) : (
       <div className="show-content">
        <img className="img-content" src={random}/>
       </div>
      )}
      <SocialInteraction />
      <NavBar />
    </>
  );
};

export default HomePage;