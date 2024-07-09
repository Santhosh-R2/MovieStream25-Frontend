import React, { useEffect, useState } from "react";
import "../../Assets/Styles/UserAddReview.css";
import img2 from "../../Assets/Images/Comedy.jpg";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axiosInstance from "../Constants/BaseUrl";
import { toast } from "react-toastify";
import { imageUrl } from "../Constants/Image_Url";

function UserAddReview() {
  const { id } = useParams();
  const uid = localStorage.getItem("userId");

  const [showModal, setShowModal] = useState(false);
  const [review, setReview] = useState("");
  const [allReviews, setAllReviews] = useState([]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/createReviews`, { movieId: id, userId: uid, review: review })
      .then((res) => {
        if (res.data.status === 200) {
          // setMovieData(res.data.data);
          toast("Review Added");
          setShowModal(false);
        } else {
          console.log("Failed to fetch movie data:", res.data.message);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch movie data:", error);
      });
  };

  useEffect(() => {
    axiosInstance
      .post(`/viewReviewssByMovie/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setAllReviews(res.data.data.reverse());
        } else {
          console.log("Failed to fetch movie data");
        }
      })
      .catch(() => {
        console.log("Failed to fetch movie data");
      });
  }, [showModal]);

  return (
    <div className="user_review">
      <div className="user_add_review">
        <div className="text-center">
          <p className="user_add_complaint_title">Share Your Thoughts</p>
          <p className="user_add_complaint_sub_title">
            Your review helps others discover great movies. Tell us what you
            loved (or didn’t) about this film!
          </p>
          <button
            className="btn bg_red mt-3 text-light"
            onClick={handleShowModal}
          >
            Add Review
          </button>
        </div>
        {allReviews.length ? (
          <div className="user_add_review_head">
            <p>Most Recent Reviews</p>
          </div>
        ) : (
          ""
        )}

        {allReviews.length
          ? allReviews.map((a) => {
              return (
                <div className="user_add_review_container">
                  <div className="user_add_review_card mt-2">
                    <div className="d-flex align-items-center">
                      <img src={`${imageUrl}/${a.userId.img.filename}`} alt="" />
                      <h4 className="mt-1 mx-3 text-light">
                        <b>{a.userId.name}</b>
                      </h4>
                    </div>
                    <div>
                      <p className="user_add_complaint_sub_title mt-3 text-justify">
                        {a.review}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header border-0">
              <h5 className="modal-title">
                <b>Add Review</b>
              </h5>
              <button
                type="button"
                className="btn-close "
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="reviewInput" className="form-label">
                    Share Here...
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id=""
                    onChange={(e) => {
                      setReview(e.target.value);
                    }}
                    required
                  />
                </div>
                <button type="submit" className="btn bg_red">
                  Submit
                </button>
              </form>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default UserAddReview;
