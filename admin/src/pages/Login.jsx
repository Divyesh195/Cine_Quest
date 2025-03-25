import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { MovieContext } from '../context/MovieContext'


function Login() {

  const [state, setState] = useState("Admin")

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setAToken, backendURL } = useContext(AdminContext)

  const { setDToken } = useContext(MovieContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendURL + '/api/admin/login', { email, password })
        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
        }
        else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendURL + '/api/movie/login', { email, password })

        if (data.success) {
          localStorage.setItem('dToken', data.token)
          setDToken(data.token)
          console.log("Distributor Token" , data.token)
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {

    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='w-fit mx-auto my-10 text-gray-800 shadow-xl p-10'>
      <p className='py-1 text-3xl'> <span className='text-primary'>{state === "Admin" ? "Admin" : "Distributor"}</span> Login</p>

      <div className='flex flex-col items-center gap-5 mt-5'>
        <div>
          <p className='text-xl'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 xl:w-[25vw] lg:w-[30vw] md:w-[50vw] sm:w-[60vw] w-[70vw]' type="text" />
        </div>
        <div>
          <p className='text-xl'>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 xl:w-[25vw] lg:w-[30vw] md:w-[50vw] sm:w-[60vw] w-[70vw]' type="text" />
        </div>

        <button className='py-1 px-2 rounded-md mt-3 text-center bg-white border border-gray-400 text-gray-800 text-xl hover:text-white hover:bg-primary transition-all ease-in duration-100 cursor-pointer' type='submit'>Login</button>

        <div>
          {
            state === 'Admin'
              ? <p>Distributor Login? <span onClick={() => setState("Distributor")} className='text-primary cursor-pointer'>Click here</span></p>
              : <p>Admin Login? <span onClick={() => setState("Admin")} className='text-primary cursor-pointer'>Click here</span></p>
          }
        </div>
      </div>

    </form>
  )
}

export default Login