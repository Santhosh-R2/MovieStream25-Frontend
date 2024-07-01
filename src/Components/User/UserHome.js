import React, { createContext, useEffect, useState } from 'react'
import UserLandingBanner from './UserLandingBanner'
import UserVideoCards from './UserVideoCards'
// import { ComedyMovies, Documentaries, HorrorMovies, RomanceMovies, actions, orginals, trending } from '../Constants/Url'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../Constants/BaseUrl';

const ForImg=createContext()

function UserHome() {

  const navigate = useNavigate(); 


  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  });

  

  return (
    <div>
      <UserLandingBanner />
      <UserVideoCards title='Action'  />
      <UserVideoCards title='Drama' />     
      <UserVideoCards title='Comedy' />
      <UserVideoCards title='Horror' />
      <UserVideoCards title='Romantic' />
      <UserVideoCards title='Documentary' />
    </div>
  )
}

export default UserHome
export {ForImg};
