import React, { useEffect } from "react";
import "../../Assets/Styles/UserViewSingleVideo.css";
import { useNavigate } from "react-router-dom";

function UserViewSingleVideo() {

  const navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  });

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg')",
        }}
        className="user_single_video_banner img-fluid mt-5"
      >
        <div className="user_single_video_title">
          <div>
            <h3>Movie Title</h3>
            <h6>
              A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.
            </h6>
            
            <button className="btn bg_red">Play</button>
            <button className="btn bg_icon mx-2"><i class="ri-heart-add-fill"></i></button>
            <button className="btn bg_icon "><i class="ri-thumb-up-fill"></i></button>
          </div>
        </div>
      </div>

      <div className="user_single_video_containers">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-8 user_single_video_container1">
              <p className="user_single_video_container1_title">Description</p>
              <p className="mt-1">
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </p>
            </div>
            <div className="col-4 user_single_video_container2">
              <p className="user_single_video_container1_title">
                <i class="ri-calendar-fill pe-1"></i> Release Date
              </p>
              <p className="mt-1">12-03-2022</p>
              <p className="user_single_video_container1_title mt-3">
                <i class="ri-global-fill"></i> Language
              </p>
              <p className="mt-1">English</p>
              <p className="user_single_video_container1_title mt-3">
                <i class="ri-hourglass-2-fill"></i> Duration
              </p>
              <p className="mt-1">02:27 hrs</p>
            </div>
            <div className="col-12 user_single_video_container1 mt-2">
              <p className="user_single_video_container1_title mb-3">Cast</p>
              <div className="user_single_video_cast_card_container">
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>

                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
                <div className="user_single_video_cast_card">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg" />
                  <p className="mt-1">Mohanlal</p>
                </div>
              </div>
            </div>
            <div className="col-4 user_single_video_cast_container2">
              <p className="user_single_video_container1_title">
              <i class="ri-clapperboard-fill"></i> Director
              </p>
              <p className="mt-1">Radhul Ram</p>
              <p className="user_single_video_container1_title mt-3">
              <i class="ri-edit-2-fill"></i> Script
              </p>
              <p className="mt-1">Soumya Praveen</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserViewSingleVideo;
