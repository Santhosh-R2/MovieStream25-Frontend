import React, { useEffect } from 'react'
import img from "../../Assets/Images/support.png";
import { useNavigate } from 'react-router-dom';


function SupportDashboard() {

  const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("supportId") == null) {
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
                      Manage Cinematic Excellence
                      </p>
                      <p className="mt-4">
                      Welcome to the Support Dashboard of CineStream, your hub for enriching our movie streaming platform. As a support team member, you play a crucial role in adding and managing movie titles, ensuring a diverse and engaging library for our users. Use this dashboard to streamline content updates, handle user feedback, and maintain the highest standards of service. Your dedication and expertise help make CineStream a preferred destination for movie lovers worldwide. Thank you for your invaluable contribution to our community.
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
  )
}

export default SupportDashboard
