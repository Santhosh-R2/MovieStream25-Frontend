import React, { useEffect, useState } from "react";
import "../../Assets/Styles/UserVideoCards.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import { imageUrl } from "../Constants/Image_Url";

function UserVideoCards({ title }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  });

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/getMoviesByGenre/${title}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setMovieData(res.data.data);
        } else {
          console.log("Failed to fetch cast data");
        }
      })
      .catch(() => {
        console.log("Failed to fetch cast data");
      });
  }, []);

  return (
    <div className="container">
       <div className="userVideoCards mt-3">
      {movieData.length ? (
        <>
          <h4>{title}</h4>
          <div className="videoPosters">
            {movieData.map((obj) =>
              obj.adminApproved == true ? (
                <Link
                  to={`/user_view_single_movie/${obj._id}/${obj.thumbnail.filename}`}
                >
                  <div>
                    <img
                      className="videoSmallPoster"
                      src={`${imageUrl}/${obj.thumbnail.filename}`}
                      alt=""
                    />
                    <h6 className="mt-2">{obj.name}</h6>
                  </div>
                </Link>
              ) : (
                ""
              )
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
    </div>
   
  );
}

export default UserVideoCards;
