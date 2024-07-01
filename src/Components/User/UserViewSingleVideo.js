import React, { useEffect, useState } from "react";
import "../../Assets/Styles/UserViewSingleVideo.css";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import { imageUrl } from "../Constants/Image_Url";
import MovieInfo from "../Common/MovieInfo";

function UserViewSingleVideo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  });

  const { id, img } = useParams();
  const uid = localStorage.getItem("userId");
  const [movieData, setMovieData] = useState({ releaseDate: "" });
  const [movieCast, setMovieCast] = useState([]);
  const [userData, setUserData] = useState({});

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
      .post(`/viewUserById/${uid}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setUserData(res.data.data);
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
      <div
        style={{
          backgroundImage: `url('${imageUrl}/${img}')`,
        }}
        className="user_single_video_banner img-fluid mt-5"
      >
        <div className="user_single_video_title">
          <div>
            <h3>{movieData.name}</h3>
            <h6>{movieData.description}</h6>
            {userData.paymentStatus == true ? <button className="btn bg_red">Play</button>:<button className="btn bg_red">Subscribe Now</button>}
            
            {userData.paymentStatus == true ? (
              <>
                <button className="btn bg_icon mx-2">
                  <i class="ri-heart-add-fill"></i>
                </button>
                <button className="btn bg_icon ">
                  <i class="ri-thumb-up-fill"></i>
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <MovieInfo />
    </div>
  );
}

export default UserViewSingleVideo;
