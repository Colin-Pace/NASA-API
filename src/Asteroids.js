import "./Asteroids.css";

import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

function Asteroids() {

  const [asteroids, setAsteroids] = useState([]);

  const SubmitForm = function(e) {

    e.preventDefault();

    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${e.target.startDate.value}&end_date=${e.target.endDate.value}&api_key=aImK8bLLzLDJjrE1OXpPZ3MZ14obdhtPCSMvgPjh`;

    fetch(url)

      .then(response => response.json())

      .then(response => {

        const asteroidNames = [];

        for (let object in response["near_earth_objects"]) {

          const date = response["near_earth_objects"][object];

          for (let asteroid = 0; asteroid < date.length; asteroid++) {

            if (date[asteroid]["name"][0] === "(") {

              let name = "";

              for (let letter = 1; letter < date[asteroid]["name"].length - 1; letter++) {

                name += date[asteroid]["name"][letter];

              }

              asteroidNames.push(name);

            } else {

              asteroidNames.push(date[asteroid]["name"]);

            }
          }
        }

        setAsteroids(asteroidNames);

      })

      .catch((error) => {
        
        console.log(error);
      
      });
  }

  return (

    <div>

      <Link id = "linkToHome" to = "/">Picture of the day</Link> 

      <h1 id = "asteroidsTitle">Near Earth Asteroids</h1>

      <p>Select a start and end date within seven days of each other to see a list of the names of the near Earth objects for that timespan.</p>

      <form
      
        id = "form"

        onSubmit = {SubmitForm}
      >

        <div className = "formSection">

          <label for = "start">Start date: </label>
          
          <input 
          
            type = "date"

            name = "startDate"

            min = "2022-01-01"

            max = "2022-12-31"

          ></input>

        </div>

        <div className = "formSection">

          <label for = "end">End date: </label>
          
          <input 
          
            type = "date"

            name = "endDate"

            min = "2022-01-01"

            max = "2022-12-31"

          ></input>

        </div>

        <input 
        
          type = "submit" 
          
          value = "Submit">
 
        </input>

      </form>

      <ul id = "asteroidsList">{asteroids.map(asteroid => 
        
        <li>{

          asteroid
        
        }</li>
     
     )}</ul>

    </div>

  );

}

export default Asteroids;