import React, { useState } from 'react';

import './FetchSearchAnimeComponent.css';

const FetchSearchAnimeComponent = () => {
  
  const [anime, setAnime] = useState({
      results: []
  });

  const [query, setQuery] = useState("");

  const CORSURL = "https://cors-anywhere.herokuapp.com/";

    const fetchAnime = () => {
    fetch(CORSURL + `https://api.jikan.moe/v3/search/anime?q=${query}`)
    .then(response => response.json())
    .then(data => setAnime(data))
    .catch(error => console.log("Error: ", error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchAnime()
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const results = anime.results.map(value => {
    return (
      <>
      <div className="flip-card scale-in-center" >
       <div class="flip-card-inner"> 
          <div className="flip-card-front" > 
            <div className="data-container" >
              <img alt="" src={value.image_url} />
            </div>
          </div>

          <div className="flip-card-back" >
            <h4> {value.title} </h4> 
          </div>
        </div> 
      </div>
      </>
    )
  })

  return (
    <>
    <div className="form-container" >
      <h1> Anime Nation </h1>
        <form onSubmit={handleSubmit} >
          <input onChange={handleChange} />
          <button type="submit" > Search </button>
        </form>
     </div>   

      <div  className="anime-container" >
       {results}
      </div> 

      <div className="footer-container">
        <span> Data Obtained from <a target="blank" href="https://jikan.moe/">MyAnimeList API</a></span>
        <span> Created By <a target="blank" href="https://mariabeckles.herokuapp.com/">Maria Beckles</a></span>
      </div>
   </>
  )
};

export default FetchSearchAnimeComponent;
 