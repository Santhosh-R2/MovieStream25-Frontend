import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';
import { toast } from 'react-toastify';
import { imageUrl } from '../Constants/Image_Url';

function MovieInfo() {

    const { id, img } = useParams();
  const [movieData, setMovieData] = useState({ releaseDate: "" });
  const [movieCast, setMovieCast] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .post(`/getMovieById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setMovieData(res.data.data);
        } else {
          console.log("Failed to fetch movie data");
        }
      })
      .catch(() => {
        console.log("Failed to fetch movie data");
      });

    axiosInstance
      .post(`/getCastBYMovieId/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setMovieCast(res.data.data);
        } else {
          console.log("Failed to fetch movie data");
        }
      })
      .catch(() => {
        console.log("Failed to fetch movie data");
      });
  }, [id]);

 

  return (
    <div>
      <div className="user_single_video_containers">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-8 user_single_video_container1">
              <p className="user_single_video_container1_title">Description</p>
              <p className="mt-1">{movieData.description}</p>
            </div>
            <div className="col-4 user_single_video_container2">
              <p className="user_single_video_container1_title">
                <i className="ri-calendar-fill pe-1"></i> Release Date
              </p>
              <p className="mt-1">{movieData.releaseDate.slice(0, 10)}</p>
              <p className="user_single_video_container1_title mt-3">
                <i className="ri-global-fill"></i> Language
              </p>
              <p className="mt-1">{movieData.language}</p>
              <p className="user_single_video_container1_title mt-3">
                <i className="ri-hourglass-2-fill"></i> Duration
              </p>
              <p className="mt-1">{movieData.duration} hrs</p>
            </div>
            <div className="col-12 user_single_video_container1 mt-2">
                {movieCast.length?<p className="user_single_video_container1_title mb-3">Cast</p>:''}
              
              <div className="user_single_video_cast_card_container">
                {movieCast.length ? (
                  movieCast.map((cast) => (
                    <div className="user_single_video_cast_card" key={cast.id}>
                      <img
                        src={`${imageUrl}/${cast.image.filename}`}
                        alt={cast.name}
                      />
                      <p className="mt-1">{cast.name}</p>
                    </div>
                  ))
                ) : (
                  <div className='mt-4' >
                    <p className="fs-3">No Cast Available</p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-4 user_single_video_cast_container2">
              <p className="user_single_video_container1_title">
                <i className="ri-clapperboard-fill"></i> Director
              </p>
              <p className="mt-1">{movieData.director}</p>
              <p className="user_single_video_container1_title mt-3">
                <i className="ri-edit-2-fill"></i> Script
              </p>
              <p className="mt-1">{movieData.scriptWriter}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
