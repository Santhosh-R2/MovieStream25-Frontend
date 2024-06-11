import React from 'react'
import img from "../../Assets/Images/complaintBanner.png";


function SupportAddMovies() {
  return (
    <div>
      <div className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div>
                <p className="user_add_complaint_title">
                Contribute to Our Library: <br />
                Add a Movie 
                </p>
                <p className="user_add_complaint_sub_title">
                Help us expand our collection by adding favorite movies below.
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
                    <div className="col-6 user_reg_input_grp ">
                      {/* <label>Movie </label> */}
                      <input type="text" placeholder="Movie Name" />
                    </div>
                    <div className="col-6 user_reg_input_grp">
                      <select>
                        <option>Genre</option>
                        <option>Action Movies</option>
                        <option>Drama Movies</option>
                        <option>Comedy Movies</option>
                        <option>Horror Movies</option>
                        <option>Romantic Movies</option>
                        <option>Documentaries Movies</option>
                      </select>
                    </div>
                    <div className="col-6 user_reg_input_grp mt-2">
                      <input type="text" placeholder="Director Name" />
                    </div>
                    <div className="col-6 user_reg_input_grp mt-2">
                      <input type="text" placeholder="Script Writer Name" />
                    </div>
                    <div className="col-6 user_reg_input_grp mt-2">
                      <input type="text" placeholder="Language" />
                    </div>
                    <div className="col-6 user_reg_input_grp mt-2">
                    <select>
                        <option>Adult</option>
                        <option>Yes</option>
                        <option>No</option>
                        
                      </select>
                    </div>
                    <div className="col-6 user_reg_input_grp mt-2">
                      <label>Movie Thumbnail</label>
                      <input type="file" />
                    </div>
                    <div className="col-6 user_reg_input_grp mt-2">
                      <label>Release Date</label>
                      <input type="date" />
                    </div>
                    <label className='mt-2' >Cast</label>

                    <div className="col-5 user_reg_input_grp">
                      <input type="text" placeholder='Name' />
                    </div>
                    <div className="col-5 user_reg_input_grp ">
                      <input type="file"  />
                    </div>
                    <div className="col-2 user_reg_input_grp ">
                      
                      <button className='btn bg_red' > Add </button>
                    </div>
                    <div className="col-6 user_reg_input_grp ">
                      <label>Add Video</label>
                      <input type='file'  rows='4'   />
                    </div>
                    <div className="col-6 user_reg_input_grp ">
                      <label>Message</label>
                      <textarea placeholder="Enter Your Message" rows='4'   />
                    </div>
                    <div className="d-flex justify-content-end" >
                        <button className="btn bg_red">Add Movie</button>
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
  )
}

export default SupportAddMovies
