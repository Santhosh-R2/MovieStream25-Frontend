import React, { useEffect } from "react";
import "../../Assets/Styles/AdminDashboard.css";
import img from "../../Assets/Images/admin.jpg";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("adminId") == null) {
      navigate("/");
    }
  });

  return (
    <div className="admin_dashboard">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="admin_dashboard_container ">
              <div className="row">
                <div className="col-8">
                  <div className="admin_dashboard_head">
                    <div>
                      <p className="admin_dashboard_head_title">
                        Ultimate Admin Dashboard
                      </p>
                      <p className="mt-4">
                        Welcome to the Admin Dashboard of CineStream, your
                        ultimate movie streaming platform. Here, as an
                        administrator, you have the power to manage users,
                        oversee platform settings, and ensure smooth operations.
                        Use this dashboard to monitor user activities, handle
                        support requests, and maintain the overall quality and
                        security of our service. Your role is essential in
                        providing an exceptional streaming experience for all
                        CineStream users. Thank you for your commitment and
                        leadership in making CineStream a top choice for movie
                        enthusiasts everywhere.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <img src={img} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex align-items-center">
            <div className="admin_dashboard_card_container">
              <div className="admin_dashboard_cards">
                <div>
                  <div className="admin_dashboard_cards_icon">
                    <i class="ri-user-line"></i>
                  </div>
                </div>
                <div className="text-center" >
                  <div className="admin_dashboard_cards_user_type">
                    <p>User</p>
                  </div>
                  <div className="admin_dashboard_cards_count">
                    <p>20</p>
                  </div>
                </div>
              </div>
              <div className="admin_dashboard_cards">
                <div>
                  <div className="admin_dashboard_cards_icon">
                  <i class="ri-movie-2-line"></i>
                  </div>
                </div>
                <div className="text-center" >
                  <div className="admin_dashboard_cards_user_type">
                    <p>Movies</p>
                  </div>
                  <div className="admin_dashboard_cards_count">
                    <p>20</p>
                  </div>
                </div>
              </div>
              <div className="admin_dashboard_cards">
                <div>
                  <div className="admin_dashboard_cards_icon">
                  <i class="ri-ball-pen-line"></i>
                  </div>
                </div>
                <div className="text-center" >
                  <div className="admin_dashboard_cards_user_type">
                    <p>Complaints</p>
                  </div>
                  <div className="admin_dashboard_cards_count">
                    <p>20</p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
