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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/contact-us' element={<ContactPage />} />
            <Route path='/book-your-test' element={<AllTest />} />
            <Route path='/our-packages' element={<PackagesPage />} />
            <Route path='/cart' element={<Booking />} />
            <Route path='/proceed-to-checkout' element={<CheckoutPage />} />

            {/* ------- Authentication ---------  */}
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignIn />} />
            <Route path='/login/forget-password' element={<ForgetPassword />} />

          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
