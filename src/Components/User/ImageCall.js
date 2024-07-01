import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constants/BaseUrl';

function ImageCall() {

    const [movie, setMovie] = useState({thumbnail:{filename:''}}); 

    useEffect(() => {
      axiosInstance
        .post(`/getApprovedMovies`)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            const lastMovie = res.data.data[res.data.data.length - 1];
            setMovie(lastMovie);
          } else {
            console.log("Failed to fetch movie data");
          }
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    }, []);


    let a=movie.thumbnail.filename

  return (
    <div>
      
    </div>
  )
}


export default ImageCall
