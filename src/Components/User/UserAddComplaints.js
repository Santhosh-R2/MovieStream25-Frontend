import React, { useEffect } from "react";
import "../../Assets/Styles/UserAddComplaints.css";
import img from "../../Assets/Images/complaintBanner.png";
import { useNavigate } from "react-router-dom";
 
function UserAddComplaints() {

  const navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  });

  return (
    <div>
      <div className="user_add_complaint">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div>
                <p className="user_add_complaint_title">
                  Speak Up: <br />
                  Report an Issue
                </p>
                <p className="user_add_complaint_sub_title">
                  Your feedback is essential in helping us improve our services.
                  Please fill out the form to let us know about any issues or
                  concerns you have.
                </p>
              </div>
              <div className="user_add_complaint_box1_img mt-3">
                <img src={img} />
              </div>
            </div>
            <div className="col-7">
              <div className="user_add_complaint_form">
                <div className="container">
                    <form>
                      <div className="row">
                    <div className="col-6 user_reg_input_grp mt-3">
                      <label>Name</label>
                      <input type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="col-6 user_reg_input_grp mt-3">
                      <label>Contact</label>

                      <input type="number" placeholder="Enter Your Name" />
                    </div>
                    <div className="col-12 user_reg_input_grp mt-4">
                      <label>E-mail</label>

                      <input type="number" placeholder="Enter Your Name" />
                    </div>
                    <div className="col-12 user_reg_input_grp mt-4">
                      <label>Message</label>

                      <textarea placeholder="Enter Your Message" rows='5'   />
                    </div>
                    <div className="d-flex justify-content-end mt-4" >
                        <button className="btn bg_red">Send Message</button>
                    </div>
                  </div>  
                    </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAddComplaints;
