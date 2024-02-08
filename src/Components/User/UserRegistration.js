import React from 'react'
import logo from "../../Assets/Vector.png";
import LandingNavbar from "../Navbars/LandingNavbar";
import './UserRegistration.css'
import { Link } from 'react-router-dom';

function UserRegistration() {
  return (
    <div>
      <div className="landing_banner">
        <LandingNavbar />
        <div className=" container">
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 landing_banner_left_box">
              <img src={logo} alt="logo" />
              <p><span className='logo_red' >Cine</span>Stream</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 landing_banner_right_box">
              <div className='user_reg_container' >
                <p>Sign Up</p>
                <div className='row mt-5' >
                    <div className='col-lg-6 col-md-6 col-sm-12 user_reg_input_grp ' >
                        <input type='text' placeholder='Enter Your Name'/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 user_reg_input_grp ' >
                       
                        <input type='email' placeholder='Enter Your Email'/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 user_reg_input_grp mt-2' >
                    <label>DOB</label>
                        <input type='date' placeholder='Enter Your Name'/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12  mt-2' >
                    <label>Gender</label>
                    <div className='d-flex justify-content-around' >
                        <input type='radio' name='gender' />
                        <label>Male</label>
                        <input type='radio' name='gender' />
                        <label>Female</label>

                    </div>
                        
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 user_reg_input_grp mt-3' >
                        <input type='number' placeholder='Enter Your Contact'/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 user_reg_input_grp mt-3' >
                       
                        <input type='password' placeholder='Enter Your Password'/>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 user_reg_input_grp_btn mt-4' >
                       
                       <button>Sign Up</button>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 mt-4' >
                       
                       <h6>Already have an Account? <Link to='/user_login' >Sign In</Link></h6>
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

export default UserRegistration
