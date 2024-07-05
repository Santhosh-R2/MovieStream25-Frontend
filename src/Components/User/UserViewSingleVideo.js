import React, { useEffect, useState } from "react";
import "../../Assets/Styles/UserViewSingleVideo.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import { imageUrl } from "../Constants/Image_Url";
import MovieInfo from "../Common/MovieInfo";
import { toast } from "react-toastify";

function UserViewSingleVideo() {
  const navigate = useNavigate();
  const { id, img } = useParams();
  const uid = localStorage.getItem("userId");
  
  const [movieData, setMovieData] = useState({ name: "", description: "" });
  const [userData, setUserData] = useState({ paymentStatus: false });
  const [wishlistMovies, setWishlistMovies] = useState([]);
  const [wishlistStatus, setWishlistStatus] = useState(false);

  useEffect(() => {
    // Redirect to home if user is not logged in
    if (!uid) { 
      navigate("/");
    }

    // Fetch movie data by ID
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

    // Fetch user data by ID
    axiosInstance
      .post(`/viewUserById/${uid}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setUserData(res.data.data);
        } else {
          console.log("Failed to fetch user data");
        }
      })
      .catch(() => {
        console.log("Failed to fetch user data");
      });

    // Fetch wishlist data for the user
    axiosInstance
      .post(`/viewWishlistsByUserId/${uid}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setWishlistMovies(res.data.data);
          // Check if the current movie is in the wishlist
          const isMovieInWishlist = res.data.data.some((wishlistItem) => wishlistItem.movieId._id === id);
          setWishlistStatus(isMovieInWishlist);
        } else {
          console.log("Failed to fetch wishlist data");
        }
      })
      .catch(() => {
        console.log("Failed to fetch wishlist data");
      });
  }, [id, uid, navigate]);

  const handleWishlist = () => {
    axiosInstance
      .post(`/addWishlist`, { userId: uid, movieId: id })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast('Added to Wishlist');
          setWishlistStatus(true); // Update the state after adding to wishlist
        }else if(res.data.status==409) {
          toast.warning(res.data.message);
        
        } else {
          toast.error("Failed to add");
        }
      })
      .catch(() => {
        console.log("Failed to add to wishlist");
      });
  };



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
            {userData.paymentStatus ? (
              <>
                <Link to={`/user_play_movie/${id}/movie`}>
                  <button className="btn bg_red text-light mx-2"><i className="ri-play-fill"></i> Play</button>
                </Link>
                <Link to={`/user_play_movie/${id}/trailer`}>
                  <button className="btn bg_icon text-light">Trailer</button>
                </Link>
              </>
            ) : (
              <>
                <Link to={`/user_play_movie/${id}/trailer`}>
                  <button className="btn bg_icon text-light mx-2">Trailer</button>
                </Link>
                <Link to={"/user_view_subscription"}>
                  <button className="btn bg_red text-light">Subscribe Now</button>
                </Link>
              </>
            )}

            {userData.paymentStatus && (
              <>
                <button className="btn bg_icon mx-2" onClick={handleWishlist}>
                  <i className={`ri-heart-add-fill ${wishlistStatus==true?'text-danger':'text-light'}`}></i>
                </button>
                <button className="btn bg_icon ">
                  <i className="ri-thumb-up-fill"></i><small className="mx-1">1</small>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <MovieInfo />
    </div>
  );
}

export default UserViewSingleVideo;
