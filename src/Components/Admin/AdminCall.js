import React, { useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import "../../Assets/Styles/AdminCall.css";
import AdminViewMovieReq from "./AdminViewMovieReq";
import AdminViewSingleMovieReq from "./AdminViewSingleMovieReq";
import AdminViewApprovedMovies from "./AdminViewApprovedMovies";
import PlayVideo from "../Common/PlayVideo";
import { useNavigate } from "react-router-dom";

function AdminCall({ type }) {

  const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("adminId") == null) {
      navigate("/");
    }
  });

  return (
    <div className="container-fluid admin_main">
      <div className="row">
        <div
          className="col-lg-3 col-md-6 col-sm-12 adminmain-sidebar"
          style={{ padding: 0 }}
        >
          <AdminSidebar />
        </div>
        <div className=" col-lg-9 col-md-6 col-sm-12 adminmain-content">
          {type === "dashboard" ? (
            <AdminDashboard />
          ) : type === "movie_req" ? (
            <AdminViewMovieReq />
          ) : type === "movie_req_by_id" ? (
            <AdminViewSingleMovieReq type='request' />
          ) : type === "approved_movies" ? (
            <AdminViewApprovedMovies />
          ) : type === "approved_movies_by_id" ? (
            <AdminViewSingleMovieReq type='view'  />
          ) : type === "admin_play_movie" ? (
            <PlayVideo  />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminCall;
