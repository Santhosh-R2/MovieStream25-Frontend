import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { APIkey, imageUrl } from '../Constants/Constance';
import '../../Assets/Styles/UserLandingBanner.css'
import { useNavigate } from 'react-router-dom';

function UserLandingBanner() {

  const navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  });

    const [movie, setMovie] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${APIkey}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      });
  }, []);

  return (
    <div
    style={{
      backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`,
      
    }}
    className="userLandingBanner img-fluid mt-5"
  >
    <div className="userLandingBannerContent">
      <h1 className="userLandingBannerTitle">{movie.title ? movie.title : movie.name}</h1>
      <div className="userLandingBannerButtons">
        <button className="button">Play</button>
        <button className="button">My List</button>
        <h1 className="userLandingBannerDescription">{movie.overview}</h1>
      </div>
    </div>
    <div className="fade_bottom"></div>
  </div>
  )
}

export default UserLandingBanner
