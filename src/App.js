import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import UserRegistration from './Components/User/UserRegistration';
import UserLogin from './Components/User/UserLogin';
import SupportLogin from './Components/Support/SupportLogin';
import AdminLogin from './Components/Admin/AdminLogin';
import Footer from './Components/Footers/Footer';
import LandingPage from './Components/Common/LandingPage';
import ScrollToTop from "./Components/Common/ScrollToTop";
import './App.css';
import LandingNavbar from "./Components/Navbars/LandingNavbar";
import UserNavbar from "./Components/Navbars/UserNavbar";
import ForgotPassword from "./Components/Common/ForgotPassword";
import UserPreferLanguages from "./Components/User/UserPreferLanguages";
import UserPreferGenre from "./Components/User/UserPreferGenre";
import AdminCall from "./Components/Admin/AdminCall";
import SupportCall from "./Components/Support/SupportCall";
import UserProfile from "./Components/User/UserProfile";
import UserEditProfile from "./Components/User/UserEditProfile";



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
        <Route path='/user_profile' element={[<UserNavbar/>,<UserProfile/>]} />
        <Route path='/user_edit_profile' element={[<UserNavbar/>,<UserEditProfile/>]} />
       
        {/* Support Routes  */}
        <Route path='/support_login' element={[<LandingNavbar/>,<SupportLogin/>]} />
        <Route path='/support_add_movies' element={[<SupportCall type='add_movies' />]} />
        <Route path='/support_add_cast/:id' element={[<SupportCall type='add_cast' />]} />
       <Route path='/support_view_movies' element={[<SupportCall type='view_movies' />]} />
       

        {/* Admin Routes */}
        <Route path='/admin_login' element={<AdminLogin/>} />
        <Route path='/admin_view_movie_req' element={<AdminCall type='movie_req' />} />
        <Route path='/admin_view_single_movie_req/:id/:img' element={<AdminCall type='movie_req_by_id' />} />
        <Route path='/admin_view_approved_movies' element={<AdminCall type='approved_movies' />} />
      </Routes>
    </div>
    <Footer/>

    </BrowserRouter>
    
  );
}

export default App;
