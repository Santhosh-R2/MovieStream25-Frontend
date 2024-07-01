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
      <div className="container-fluid ">
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
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/user_add_complaint'>Add Complaint</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
