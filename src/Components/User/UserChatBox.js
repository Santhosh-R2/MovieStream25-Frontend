import React, { useEffect, useRef, useState } from "react";
import "../../Assets/Styles/UserChatBox.css";
import img from "../../Assets/Images/support.jpg";
import { useParams } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";

function UserChatBox() {
  const { id } = useParams();
  const { type } = useParams();


  console.log(type);

  // const aid = localStorage.getItem("advocateId");

  const [messageList, setMessageList] = useState([
  ]);
  const [userDetalis, setUserDetails] = useState({
    profilePic: { filename: "" },
  });
  const [inputValue, setInputValue] = useState("");
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messageList]);

  useEffect(() => {
    if (type == "support") {
      axiosInstance
        .post(`viewChatBetweenuserandSupport/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            setMessageList(res.data.data);
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });

    //   axiosInstance
    //     .post(`viewUserById/${uid}`)
    //     .then((res) => {
    //       // console.log(res);
    //       if (res.data.status === 200) {
    //         setUserDetails(res.data.data);
    //       } else {
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else if (type == "jnr") {
    //   axiosInstance
    //     .post(`viewChatBetweenAdvAndJr`, { advId: aid, jrId: uid })
    //     .then((res) => {
    //       console.log(res);
    //       if (res.data.status === 200) {
    //         setMessageList(res.data.data);
    //       } else {
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   axiosInstance
    //     .post(`viewJuniorAdvocateById/${uid}`)
    //     .then((res) => {
    //       // console.log(res);
    //       if (res.data.status === 200) {
    //         setUserDetails(res.data.data);
    //       } else {
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    //  else if (type == "interns") {
    //   axiosInstance
    //     .post(`viewChatBetweenInternAndAdv`, { advId: aid, internId: uid })
    //     .then((res) => {
    //       console.log(res);
    //       if (res.data.status === 200) {
    //         setMessageList(res.data.data);
    //       } else {
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   axiosInstance
    //     .post(`viewInternsById/${uid}`)
    //     .then((res) => {
    //       // console.log(res);
    //       if (res.data.status === 200) {
    //         setUserDetails(res.data.data);
    //       } else {
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    }
  }, [id]);

  const handleSupportSend = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`chatting`, {
        msg: inputValue,
        from: "users",
        fromId:id,
        support:true
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setInputValue("");
          setMessageList((prevMessageList) => [
            ...prevMessageList,
            res.data.data,
          ]);
        } else {
          console.log("Failed to send message");
        }
      })
      .catch(() => {
        console.log("Failed to send message");
      });
    console.log("client");
  };

  // const handleJnrSend = (e) => {
  //   e.preventDefault();
  //   axiosInstance
  //     .post(`chatting`, {
  //       msg: inputValue,
  //       from: "advocates",
  //       to: "jnrAdv",
  //       advId: aid,
  //       jrId: uid,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.status === 200) {
  //         setInputValue("");
  //         setMessageList((prevMessageList) => [
  //           ...prevMessageList,
  //           res.data.data,
  //         ]);
  //       } else {
  //         toast.error("Failed to send message");
  //       }
  //     })
  //     .catch(() => {
  //       toast.error("Failed to send message");
  //     });
  //   console.log("jnr");
  // };

  // const handleInternSend = (e) => {
  //   e.preventDefault();
  //   axiosInstance
  //     .post(`chatting`, {
  //       msg: inputValue,
  //       from: "advocates",
  //       to: "interns",
  //       advId: aid,
  //       internId: uid,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.status === 200) {
  //         setInputValue("");
  //         setMessageList((prevMessageList) => [
  //           ...prevMessageList,
  //           res.data.data,
  //         ]);
  //       } else {
  //         toast.error("Failed to send message");
  //       }
  //     })
  //     .catch(() => {
  //       toast.error("Failed to send message");
  //     });
  //   console.log("jnr");
  // };

  return (
    <div>
      <div className="advocate_chat">
        {messageList.length ? (
          <div className="adv_chat_container">
            <div className="chat-header">
              <img
                // src={`${imageUrl}/${userDetalis.profilePic.filename}`}
                src={img}
                className="img-fluid"
                alt="Advocate"
              />
              <span className="fs-5 px-3 text-light">Support</span>
              {/* <span className="fs-5 px-3">{userDetalis.name}</span> */}
            </div>
            <div className="adv_chat-body" ref={chatBodyRef}>
              {messageList.map((msg) => (
                <div>
                  {type == "support" ? (
                    <div
                      //   key={msg.id}
                      className={`chat-message ${
                        msg.from == "support"
                          ? "received"
                          : "sent"
                      }`}
                    >
                      <div className="message-header">
                        <span className="username">
                          <small>
                            {msg.from == "users"
                              ? msg.fromId.name
                              : 'Support'}
                          </small>
                        </span>
                        <span className="timestamp text-light">
                          {msg.createdAt.slice(0, 10)}
                        </span>
                      </div>
                      <p className="message-content fs-5">{msg.msg}</p>
                    </div>


                  ) : type == "jnr" ? (
                    <div
                      key={msg.id}
                      className={`chat-message ${
                        msg.from == "jradvocate" && msg.to == "advocates"
                          ? "received"
                          : "sent"
                      }`}
                    >
                      <div className="message-header">
                        <span className="username">
                          <small>
                            {msg.from == "jradvocate"
                              ? msg.jrId.name
                              : msg.advId.name}
                          </small>
                        </span>
                        <span className="timestamp">
                          {msg.createdAt.slice(0, 10)}
                        </span>
                      </div>
                      <p className="message-content">{msg.msg}</p>
                    </div>
                  ) : type == "interns" ? (
                    <div
                      key={msg.id}
                      className={`chat-message ${
                        msg.from == "interns" && msg.to == "advocates"
                          ? "received"
                          : "sent"
                      }`}
                    >
                      <div className="message-header">
                        <span className="username">
                          <small>
                            {msg.from == "interns"
                              ? msg.internId.name
                              : msg.advId.name}
                          </small>
                        </span>
                        <span className="timestamp">
                          {msg.createdAt.slice(0, 10)}
                        </span>
                      </div>
                      <p className="message-content">{msg.msg}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
            <form
              onSubmit={
                type == "support"
                  ? handleSupportSend
                  // : type == "jnr"
                  // ? handleJnrSend
                  // : type == "interns"
                  // ? handleInternSend
                  : ''
              }
            >
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type Your Message"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="no_chat_container">
            <h3>
              Please select a person to start a conversation and get the help or
              information you need.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserChatBox;
