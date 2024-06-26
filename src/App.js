import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AllTest from './pages/AllTest/AllTest';
import PackagesPage from './pages/PackagesPage/PackagesPage';
import Booking from './pages/Booking/Booking';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Login from './components/Login/Login';
import SignIn from './components/Login/SignIn';
import ForgetPassword from './components/Login/ForgetPassword';
import UserReport from './pages/UserReport/UserReport';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import PackageByTitlePage from './pages/PackagesPage/PackageByTitlePage';
import CartPage from './pages/CartPage/CartPage';
import SearchByTest from './pages/AllTest/SearchByTest';
import GetAddress from './pages/CheckoutPage/GetAddress';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/contact-us' element={<ContactPage />} />


            <Route path='/lab-tests' element={<AllTest />} />
            <Route path='/lab-tests/:testname' element={<SearchByTest />} />

            <Route path='/our-packages' element={<PackagesPage />} />
            

            {/* ------- Authentication ---------  */}
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignIn />} />
            <Route path='/login/forget-password' element={<ForgetPassword />} />

            <Route path='/user-profile' element={<UserProfilePage />} />

            {/* --- Route by package names -- */}
            <Route path='/packages/:packageTitle' element={<PackageByTitlePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/proceed-to-book' element={<GetAddress />} />


            <Route path='/report-status' element={<UserReport />} />
            <Route path='/proceed-to-checkout' element={<CheckoutPage />} />
            <Route path='/booking' element={<Booking />} />

          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
