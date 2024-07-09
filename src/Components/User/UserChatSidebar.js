import React, { useState } from "react";
import { imageUrl } from "../Constants/Image_Url";
import "../../Assets/Styles/UserChatSidebar.css";
import img from "../../Assets/Images/Action.jpg";
import { Link } from "react-router-dom";

function UserChatSidebar() {
  const [users, setUsers] = useState([{ name: "Radhul" }, { name: "Adarsh" }]);
  //   const [users, setUsers] = useState([]);
  const [interns, setInterns] = useState([]);
  return (
    <div className="user_chat_sidebar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <div className="adv_chat_sidebar_search">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">
                <i class="ri-search-2-line"></i>
              </span>
            </div>
          </div> */}

            {users.length == 0 && interns.length == 0 ? (
              <div className="no_data_found_chat">
                <p>No Recipient found</p>
              </div>
            ) : (
              <div className="mt-3">
                <div className="adv_chat_sidebar_search mb-2">
                  <>
                    <Link>
                      <div className="user_type_box">
                        <p className="text-light">
                          <small>All</small>
                        </p>
                      </div>
                    </Link>

                    <Link>
                      <div className="user_type_box">
                        <p className="text-light">
                          <small>Chats</small>
                        </p>
                      </div>
                    </Link>

                    <Link>
                      <div className="user_type_box">
                        <p className="text-light">
                          <small>Groups</small>
                        </p>
                      </div>
                    </Link>
                    <Link>
                      <div className="user_type_box">
                        <p className="text-light">
                          <small>Support</small>
                        </p>
                      </div>
                    </Link>
                  </>
                </div>
                {users.length
                  ? users.map((e) => {
                      return (
                        <div className="adv_chat_sidebar_name">
                          {/* <Link to={`/advocate_single_chat/${e._id}/client`}> */}
                          <div className="d-flex">
                            <div className="adv_chat_sidebar_name_img">
                              <img
                                // src={`${imageUrl}/${img}`}
                                src={img}
                                className="img-fluid"
                                alt="Advocate"
                              />
                            </div>
                            <div className="adv_chat_sidebar_name_content px-3">
                              <div>
                                <p>
                                  <b>{e.name}</b>
                                </p>
                                {/* <p>
                                  <small>[ Client ]</small>
                                </p> */}
                              </div>
                            </div>
                          </div>
                          {/* </Link> */}
                        </div>
                      );
                    })
                  : ""}

                {interns.length
                  ? interns.map((e) => {
                      return (
                        <div className="adv_chat_sidebar_name">
                          {/* <Link to={`/advocate_single_chat/${e._id}/interns`}> */}
                          <div className="d-flex">
                            <div className="adv_chat_sidebar_name_img">
                              <img
                                src={`${imageUrl}/${img}`}
                                className="img-fluid"
                                alt="Advocate"
                              />
                            </div>
                            <div className="adv_chat_sidebar_name_content px-3">
                              <div>
                                <p>
                                  <b>{e.name}</b>
                                </p>
                                <p>
                                  <small>[ Intern ]</small>
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* </Link> */}
                        </div>
                      );
                    })
                  : ""}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserChatSidebar;
