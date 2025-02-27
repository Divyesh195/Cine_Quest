import React, { useContext } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/admin_pages/Dashboard'
import AddMovie from './pages/admin_pages/AddMovie'
import AllBookings from './pages/admin_pages/AllBookings'
import './App.css'
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router';
import AllMovies from './pages/admin_pages/AllMovies'

function App() {

  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <>
      <Navbar />
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/add-movie' element={<AddMovie />} />
          <Route path='/all-bookings' element={<AllBookings />} />
          <Route path='/all-movies' element={<AllMovies />} />
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