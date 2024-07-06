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

import { ToastContainer, toast } from 'react-toastify';
import OtpSignUp from './components/Login/OtpSignUp';
import OrderSummary from './pages/CheckoutPage/GetAddress';
import BookingForm from './pages/CheckoutPage/BookingForm';
import LabsLocations from './pages/Labs/LabsLocations';
import BookingConfirm from './pages/CheckoutPage/BookingConfirm';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <ToastContainer />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/contact-us' element={<ContactPage />} />


            <Route path='/lab-tests' element={<AllTest />} />
            <Route path='/lab-tests/:testname' element={<SearchByTest />} />

            <Route path='/our-packages' element={<PackagesPage />} />
            <Route path='/our-packages/:packagename' element={<PackageByTitlePage />} />

            {/* ------- Authentication ---------  */}
            <Route path='/login' element={<Login />} />
            <Route path='/login/forget-password' element={<ForgetPassword />} />
            <Route path='/sign-up' element={<SignIn />} />
            <Route path='/sign-up/confirm-account/:email' element={<OtpSignUp />} />

            <Route path='/profile' element={<UserProfilePage />} />
         


            {/* --- Route by package names -- */}
            <Route path='/cart' element={<CartPage />} />
            <Route path='/cart/add-booking-details' element={<BookingForm />} />
            <Route path='/cart/booking-summary' element={<OrderSummary />} />
            <Route path='/booking-confirmed' element={<BookingConfirm />} />


            <Route path='/report-status' element={<UserReport />} />
            <Route path='/proceed-to-checkout' element={<CheckoutPage />} />
            <Route path='/booking' element={<Booking />} />

            <Route path='/give-location' element={<LabsLocations />} />


          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
