import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/Images/support.jpg";
import axiosInstance from "../Constants/BaseUrl";

function UserChatListNames({ userType }) {
  const [allUsers, setAllUsers] = useState([
    { name: "Radhul R Pillai" },
    { name: "Adersh Kumar" },
  ]);
  // const [userList, setUserList] = useState([]);
  const [groups, setGroups] = useState([]);
  const [support, setSupport] = useState(false);

  const id = localStorage.getItem("userId");

  useEffect(() => {
    axiosInstance
      .post(`viewChatRecipientsforUserById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          //   setAllUsers(res.data.users);
          setSupport(res.data.support);
        }
      })
      .catch(() => {
        console.log("Failed to Add Case");
      });
  }, [id]);
  return (
    <div>
      {userType == "all" ? (
        <>
          {support ? (
            <div className="adv_chat_sidebar_name">
              <Link to={`/user_single_chat/${id}/support`}>
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
                        <b>Support</b>
                      </p>
                      <p>{/* <small>[ Support ]</small> */}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            ""
          )}

          {allUsers.length
            ? allUsers.map((e) => {
                return (
                  <div className="adv_chat_sidebar_name">
                    <Link to={`/advocate_single_chat/${e._id}/client`}>
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
                            <p>
                              <small>[ Client ]</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            : ""}

          {/* {interns.length
                  ? interns.map((e) => {
                      return (
                        <div className="adv_chat_sidebar_name">
                          <Link to={`/advocate_single_chat/${e._id}/interns`}>
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
                          </Link>
                        </div>
                      );
                    })
                  : ""} */}
        </>
      ) : userType == "support" ? (
        <>

          {support ? (
            <div className="adv_chat_sidebar_name">
              <Link to={`/user_single_chat/${id}/support`}>
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
                        <b>Support</b>
                      </p>
                      <p>{/* <small>[ Support ]</small> */}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserChatListNames;
