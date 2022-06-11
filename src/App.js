import './App.css';

import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

function App() {

  const [link, setLink] = useState(undefined);

  const [title, setTitle] = useState(undefined);

  const [explanation, setExplanation] = useState(undefined);

  useEffect(() => {

    fetch("https://api.nasa.gov/planetary/apod?api_key=aImK8bLLzLDJjrE1OXpPZ3MZ14obdhtPCSMvgPjh")
      
      .then(response => response.json())
      
      .then(response => {

        setTitle(response.title);

        setLink(response.url);

        setExplanation(response.explanation);

      })

      .catch((error) => {
        
        console.log(error);
      
      });

  }, []);

  return (

    <div id = "app"> 

      <Link id = "link" to = "asteroids">Near Earth asteroids</Link>

      <h1 id = "title">{title}</h1>
    
      <img id = "img" src = {link}></img>

      <p id = "explanation">{explanation}</p>

    </div>
  );
}

export default App;