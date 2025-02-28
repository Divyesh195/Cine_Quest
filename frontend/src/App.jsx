import { Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from './pages/Contact'
import Movies from './pages/Movies'
import Login from './pages/Login'
import Booking from './Pages/Booking'
import MyBookings from './pages/MyBookings'
import MyProfile from './pages/MyProfile'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="mx-4 md:mx-[10%]">
      <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:genre' element={<Movies />} />
          <Route path='/login' element={<Login />} />
          <Route path="/booking/:movieID" element={<Booking />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/my-profile' element={<MyProfile />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
