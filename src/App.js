import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import UserRegistration from './Components/User/UserRegistration';
import UserLogin from './Components/User/UserLogin';
import DistributorRegistration from './Components/Distributor/DistributorRegistration';
import DistributorLogin from './Components/Distributor/DistributorLogin';
import SupportLogin from './Components/Support/SupportLogin';
import AdminLogin from './Components/Admin/AdminLogin';
import Footer from './Components/Footers/Footer';
import LandingPage from './Components/Common/LandingPage';
import ScrollToTop from "./Components/Common/ScrollToTop";
import UserHome from "./Components/User/UserHome";
import './App.css';
import LandingNavbar from "./Components/Navbars/LandingNavbar";
import UserNavbar from "./Components/Navbars/UserNavbar";
import ForgotPassword from "./Components/Common/ForgotPassword";
import UserViewSingleVideo from "./Components/User/UserViewSingleVideo";
import SupportAddMovies from "./Components/Support/SupportAddMovies";
import UserAddComplaints from "./Components/User/UserAddComplaints";
import UserPreferLanguages from "./Components/User/UserPreferLanguages";
import UserPreferGenre from "./Components/User/UserPreferGenre";



function App() {
  return (
    <BrowserRouter basename="movie_streaming" >
    <ScrollToTop/>
    <div>
      <Routes>

        {/* User Routes */}
        <Route path='/' element={[<LandingNavbar/>,<LandingPage/>]} />
        <Route path='/user_registration' element={[<LandingNavbar/>,<UserRegistration/>]} />
        <Route path='/user_login' element={[<LandingNavbar/>,<UserLogin/>]} />
        <Route path='/user_forgot_password' element={[<LandingNavbar/>,<ForgotPassword activeUser='user' />]} />
        <Route path='/user_prefer_languages' element={[<UserPreferLanguages/>]} />
        <Route path='/user_prefer_genre' element={[<UserPreferGenre/>]} />
        <Route path='/user_home' element={[<UserNavbar/>,<UserHome/>]} />
        <Route path='/user_view_single_movie' element={[<UserNavbar/>,<UserViewSingleVideo/>]} />
        {/* <Route path='/user_add_complaint' element={[<UserNavbar/>,<UserAddComplaints/>]} /> */}

        {/* Distributor Routes */}
        <Route path='/distributor_registration' element={[<LandingNavbar/>,<DistributorRegistration/>]} />
        <Route path='/distributor_login' element={[<LandingNavbar/>,<DistributorLogin/>]} />
        <Route path='/distributor_forgot_password' element={[<LandingNavbar/>,<ForgotPassword activeUser='distributor' />]} />


        {/* Support Routes  */}
        <Route path='/support_login' element={[<LandingNavbar/>,<SupportLogin/>]} />
        <Route path='/support_add_movies' element={[<LandingNavbar/>,<SupportAddMovies/>]} />

        {/* Admin Routes */}
        <Route path='/admin_login' element={<AdminLogin/>} />
      </Routes>
    </div>
    <Footer/>

    </BrowserRouter>
    
  );
}

export default App;
