import React, { useContext } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/admin_pages/Dashboard'
import AddMovie from './pages/admin_pages/AddMovie'
import AllBookings from './pages/admin_pages/AllBookings'
import MovieDashboard from './pages/distributor_pages/MovieDashboard'
import MovieBookings from './pages/distributor_pages/MovieBookings'
import MovieProfile from './pages/distributor_pages/MovieProfile'
import './App.css'
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router';
import AllMovies from './pages/admin_pages/AllMovies'
import { MovieContext } from './context/MovieContext'



function App() {

  const { aToken } = useContext(AdminContext)

  const {dToken} = useContext(MovieContext)

  return aToken || dToken ? (
    <>
      <Navbar />
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* Admin routes  */}
          {/* <Route path='/' element={<Dashboard />} /> */}
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/add-movie' element={<AddMovie />} />
          <Route path='/all-bookings' element={<AllBookings />} />
          <Route path='/all-movies' element={<AllMovies />} />

          {/* Distributor Routes  */}
          <Route path='/distributor-dashboard' element={<MovieDashboard />} />
          <Route path='/movie-bookings' element={<MovieBookings />} />
          <Route path='/movie-profile' element={<MovieProfile />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  )
    : (
      <>
        <Login />
        <ToastContainer />
      </>
    )
}

export default App