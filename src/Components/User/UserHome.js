import React, { useEffect } from 'react'
import UserLandingBanner from './UserLandingBanner'
import UserVideoCards from './UserVideoCards'
import { ComedyMovies, Documentaries, HorrorMovies, RomanceMovies, actions, orginals, trending } from '../Constants/Url'
import { useNavigate } from 'react-router-dom';

function UserHome() {

  const navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("userId") == null) {
      navigate("/");
    }
  });

  return (
    <div>
      <UserLandingBanner/>
      <UserVideoCards url={trending} title='Trending Now'  />
      <UserVideoCards url={orginals} title='Netflix Orginals' />     
      <UserVideoCards url={actions} title='Action' />
      <UserVideoCards url={ComedyMovies} title='Comedy Movies' />
      <UserVideoCards url={HorrorMovies} title='Horror Movies' />
      <UserVideoCards url={RomanceMovies} title='Romantic Movies' />
      <UserVideoCards url={Documentaries} title='Documentaries' />
    </div>
  )
}

export default UserHome
