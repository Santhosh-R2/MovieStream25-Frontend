import React, { useEffect } from 'react';
import '../../Assets/Styles/UserNavbar.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/Vector (1).png'

{/* <img className='userNavbarAvatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="" /> */}

function UserNavbar() { 

  const navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  },[navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className='userNavbar'>
      <Link to='/user_home'>
            <div className="landing_nav_logo">
              <img src={logo} alt="logo" />
              <p>
                <span className="logo_red">Cine</span>Stream
              </p>
            </div>
          </Link>
          <div className='d-flex' >
          <div className='pe-3' >
            <Link to={'/user_home'} >Home</Link>
            </div>
          {/* <div className='pe-3' >
            <Link to={'/user_add_complaint'} >Add Complaint</Link>
            </div> */}
            <div className='pe-3' >
            <Link onClick={handleLogout} >Logout</Link>
            </div>
            
          </div>
    </div>
  )
}

export default UserNavbar
