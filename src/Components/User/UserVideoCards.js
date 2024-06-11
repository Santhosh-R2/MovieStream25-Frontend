import React, { useEffect, useState } from 'react'
import { imageUrl } from '../Constants/Constance';
import '../../Assets/Styles/UserVideoCards.css'
import axios from '../Constants/Axios'
import { Link, useNavigate } from 'react-router-dom';

function UserVideoCards(props) {

  const navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  });

    const [movies, setmovies] = useState([]);
  // const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setmovies(response.data.results);
    });
  }, []);

  return (
    
    <div className="userVideoCards mt-3">
      <h4>{props.title}</h4>
      <div className="videoPosters">
        {movies.map((obj) => (
          obj.backdrop_path !=null ?
          <Link to={'/user_view_single_movie'} >
          <div>
            <img
              // onClick={() => handleMovie(obj.id)}
              className="videoSmallPoster"
              src={`${imageUrl + obj.backdrop_path}`}
              alt=""
              />
            <h6 className='mt-2' >{obj.title ? obj.title : obj.name}</h6>
          </div>
          </Link>
           : null
        ))}
      </div>
      {/* {urlId && <YouTube opts={opts} videoId={urlId.key} />} */}
    </div>
  )
}

export default UserVideoCards
