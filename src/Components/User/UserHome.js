import React, { useEffect, useState } from "react";
import UserLandingBanner from "./UserLandingBanner";
import UserVideoCards from "./UserVideoCards";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import SubscriptionBanner from "./SubscriptionBanner";
import GenreCards from "./GenreCards";


function UserHome() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  });

  const id = localStorage.getItem("userId");
  const [userDetails, setUserDetails] = useState({});
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewUserById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setUserDetails(res.data.data);
          setGenre(res.data.data.preferredGenre)
        } else {
          console.log("Failed to fetch cast data");
        }
      })
      .catch(() => {
        console.log("Failed to fetch cast data");
      });
  }, []);

  return (
    <div>
      <UserLandingBanner />
      {/* <GenreCall/> */}
      <div className="container">
        <div className="row">
          {
            genre.length?<h4 className="mt-3 text-light" >For You</h4>:''
          }
          {genre.length
            ? genre.map((genre) => {
                return (
                  <div className="col-3">
                    <GenreCards genre={genre} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <UserVideoCards title="Action" />
      <UserVideoCards title="Drama" />
      <UserVideoCards title="Comedy" />
      <UserVideoCards title="Horror" />
      <UserVideoCards title="Romantic" />
      <UserVideoCards title="Documentary" />
      {userDetails.paymentStatus == false ? <SubscriptionBanner /> : ""}
    </div>
  );
}

export default UserHome;
