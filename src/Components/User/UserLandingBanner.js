import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../Constants/BaseUrl";
import { imageUrl } from "../Constants/Image_Url";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../Assets/Styles/UserLandingBanner.css";

function UserLandingBanner() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      navigate("/");
    }
  }, [navigate]);

  const [movie, setMovie] = useState({ thumbnail: { filename: "" } });

  useEffect(() => {
    axiosInstance
      .post(`/getApprovedMovies`)
      .then((res) => {
        // console.log(res);
        if (res.data.status === 200) {
          const lastMovie = res.data.data[res.data.data.length - 1];
          setMovie(lastMovie);
        } else {
          console.log("Failed to fetch movie data");
        }
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <div className="userLandingBanner">
      {movie ? (
        <>
          <img
            src={`${imageUrl}/${movie.thumbnail.filename}`}
            alt="movie_image"
          />

          <div className="userLandingBannerContent">
            <h1 className="userLandingBannerTitle">{movie.name}</h1> 
            <div className="userLandingBannerButtons">
              <Link to={`/user_view_single_movie/${movie._id}/${movie.thumbnail.filename}`}>
              <button className="button">Play</button>
              </Link>
              <h1 className="userLandingBannerDescription">
                {movie.description}
              </h1>
            </div>
          </div>
        </>
      ) : (
        <div className="no_data_found">
          <p>No Movies Found</p>
        </div>
      )}

      <div className="fade_bottom"></div>
    </div>
  );
}

export default UserLandingBanner;
