import React, { useEffect, useRef, useState } from "react";
import "../../Assets/Styles/UserChatBox.css";
import img from "../../Assets/Images/support.jpg";
import { useParams } from "react-router-dom";
import axiosInstance from "../Constants/BaseUrl";
import { imageUrl } from "../Constants/Image_Url";

function UserChatBox() {
  const { id } = useParams();
  const { type } = useParams();

  console.log(type);

  const fId = localStorage.getItem("userId");

  const [messageList, setMessageList] = useState([]);
  const [userDetalis, setUserDetails] = useState({
    img: { filename: "" },
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
    } else if (type == "users") {
      axiosInstance
        .post(`viewChatBetweenUsers`, { fromId: fId, toId: id })
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

      axiosInstance
        .post(`viewUserById/${id}`)
        .then((res) => {
          if (res.data.status === 200) {
            setUserDetails(res.data.data);
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id, type]);

  const handleSupportSend = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`chatting`, {
        msg: inputValue,
        from: "users",
        fromId: id,
        support: true,
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

  const handleUserSend = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`chatting`, {
        msg: inputValue,
        from: "users",
        support: false,
        fromId: fId,
        toId: id,
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

  console.log(messageList);

  return (
    <div>
      {type == "support" ? (
        <div className="advocate_chat">
          {messageList.length ? (
            <div className="adv_chat_container">
              <div className="chat-header">
                <img src={img} className="img-fluid" alt="Advocate" />
                <span className="fs-5 px-3 text-light">Support</span>
              </div>

              <div className="adv_chat-body" ref={chatBodyRef}>
                {messageList.map((msg) => (
                  <div key={msg.id}>
                    {type == "support" ? (
                      <div
                        className={`chat-message ${
                          msg.from == "support" ? "received" : "sent"
                        }`}
                      >
                        <div className="message-header">
                          <span className="username">
                            <small>
                              {msg.from == "users"
                                ? msg.fromId?.name || "Unknown User"
                                : "Support"}
                            </small>
                          </span>
                          <span className="timestamp text-light">
                            {msg.createdAt.slice(0, 10)}
                          </span>
                        </div>
                        <p className="message-content fs-5">{msg.msg}</p>
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
                    : // : type == "jnr"
                      // ? handleJnrSend
                      // : type == "interns"
                      // ? handleInternSend
                      ""
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
                Please select a person to start a conversation and get the help
                or information you need.
              </h3>
            </div>
          )}
        </div>
      ) : type == "users" ? (
        <div className="advocate_chat">
          <div className="adv_chat_container">
            <div className="chat-header">
              <img
                src={`${imageUrl}/${userDetalis.img.filename}`}
                className="img-fluid"
                alt="Advocate"
              />
              <span className="fs-5 px-3 text-light">{userDetalis.name}</span>
            </div>
            <div className="adv_chat-body" ref={chatBodyRef}>
              {messageList.length ? (
                messageList.map((msg) => {
                  const fromId = msg.fromId?._id || msg.fromId;
                  console.log("msg.fromId:", msg.fromId);
                  console.log("fromId:", fromId);
                  console.log("fId:", fId);
                  return (
                    <div key={msg.id}>
                      {type == "users" ? (
                        <div
                          className={`chat-message ${
                            fromId == fId ? "sent" : "received"
                          }`}
                        >
                          <div className="message-header">
                            <span className="username">
                              <small>{msg.fromId?.name || ""}</small>
                            </span>
                            <span className="timestamp text-light">
                              {msg.createdAt.slice(0, 10)}
                            </span>
                          </div>
                          <p className="message-content">{msg.msg}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="no_chat_container">
                  <h3 className="text-light">
                    Please select a person to start a conversation and get the
                    help or information you need.
                  </h3>
                </div>
              )}
            </div>
            <form
              onSubmit={
                type == "users"
                  ? handleUserSend
                  : // : type == "jnr"
                    // ? handleJnrSend
                    // : type == "interns"
                    // ? handleInternSend
                    ""
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
        </div>
      ) : (
        <div className="no_chat_container">
          <h3 className="text-light">
            Select a person to start a conversation
          </h3>
        </div>
      )}
    </div>
  );
}

export default UserChatBox;
