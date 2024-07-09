import React, { useEffect } from "react";
import "../../Assets/Styles/UserNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/Vector (1).png";

function UserNavbar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/user_home">
          <img
            src={logo}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="ms-2 text-light">
            <span className="text-danger">Cine</span>Stream
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/user_home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/user_view_subscription">
                Subscription
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/user_chat">
                Chat
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/user_add_complaint'>Add Complaint</Link>
            </li>
            <li className="nav-item">
              <Link to={'/user_view_wishlist'} className="nav-link text-light">
                <i className="ri-heart-3-line"></i>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-light"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ri-user-3-line"></i>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/user_profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="/view_my_plans">My Plans</Link></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
