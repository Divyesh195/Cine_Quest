import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Login() {


  const [state, setState] = useState('Sign Up')

  const { backendUrl, setToken, token } = useContext(AppContext)

  const navigate = useNavigate()

  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  useEffect(()=>{
    if (token) {
      navigate("/")
    }
  },[token])


  const submmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (state === "Sign Up") {

        const { data } = await axios.post(backendUrl + '/api/customer/register-customer', { name, mobile, password })

        if (data.success) {
          // localStorage.setItem('token', data.token)
          // setToken(data.token)
          setState("Login")
          //Remove this two lines if you don't want to fill data on login page
          setMobile('')
          setPassword('')
          return console.log("Registration successfull")
        }
        else {
          return toast.error("Registration failed")
        }
      }
      else {
        const { data } = await axios.post(backendUrl + '/api/customer/customer-login', { mobile, password })

        if (data.success) {
          setToken(data.token)
          localStorage.setItem('token', data.token)
          navigate('/')
          toast.success("Login successfull")
          return console.log("success")
        }
        else {
          return toast.error(data.message)
        }
      }
    } catch (error) {
      return toast.error(error.message)
    }

  }


  return (
    <form onSubmit={submmitHandler} className='w-fit mx-auto text-gray-800 shadow-xl p-10'>
      <p className='py-1 text-3xl'>{state === "Sign Up" ? "Create Account" : "Log In"}</p>
      <p className='py-1 text-sm'>Please {state === "Sign Up" ? "create an accout" : "log into your account"} to book movie</p>

      <div className='flex flex-col items-center gap-5 mt-5'>
        <div className={`${state == "Login" ? "hidden" : "block"}`} >
          <p className='text-xl'>Name</p>
          <input className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 xl:w-[25vw] lg:w-[30vw] md:w-[50vw] sm:w-[60vw] w-[70vw]' type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div>
          <p className='text-xl'>Mobile</p>
          <input className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 xl:w-[25vw] lg:w-[30vw] md:w-[50vw] sm:w-[60vw] w-[70vw]' type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div>
          <p className='text-xl'>Password</p>
          <input className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 xl:w-[25vw] lg:w-[30vw] md:w-[50vw] sm:w-[60vw] w-[70vw]' type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type='submit' className='py-1 px-2 rounded-md mt-3 text-center bg-white border border-gray-400 text-gray-800 text-xl hover:text-white hover:bg-primary transition-all ease-in duration-100 cursor-pointer'>{state === "Sign Up" ? "Create Account" : "Log In"}</button>

        <div>
          {
            state === 'Sign Up'
              ? <p>Already have account? <span onClick={() => setState("Login")} className='text-primary cursor-pointer'>Login</span></p>
              : <p>Don't have an account? <span onClick={() => setState("Sign Up")} className='text-primary cursor-pointer'>Create here</span></p>
          }
        </div>
      </div>

    </form>
  )
}

export default Login