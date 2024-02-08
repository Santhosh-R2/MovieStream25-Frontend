import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LandingNavbar from './Components/Navbars/LandingNavbar';
import LandingBanner from './Components/LandingBanner';
import Footer from './Components/Footer';
import {BrowserRouter,Route, Routes} from 'react-router-dom'

import './App.css';
import UserRegistration from './Components/User/UserRegistration';
import UserLogin from './Components/User/UserLogin';
import DistributorRegistration from './Components/Distributor/DistributorRegistration';
import DistributorLogin from './Components/Distributor/DistributorLogin';
import SupportLogin from './Components/Support/SupportLogin';
import AdminLogin from './Components/Admin/AdminLogin';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<LandingBanner/>} />
        <Route path='/user_registration' element={<UserRegistration/>} />
        <Route path='/user_login' element={<UserLogin/>} />
        <Route path='/distributor_registration' element={<DistributorRegistration/>} />
        <Route path='/distributor_login' element={<DistributorLogin/>} />
        <Route path='/support_login' element={<SupportLogin/>} />
        <Route path='/admin_login' element={<AdminLogin/>} />

      </Routes>
    </div>
    <Footer/>

    </BrowserRouter>
    
  );
}

export default App;
