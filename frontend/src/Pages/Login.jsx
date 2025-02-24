import React, { useState } from 'react'

function Login() {


  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const submmitHandler = async (event) => {
    event.prevetDefault()
  }
  return (
    <form className='w-fit mx-auto text-gray-800 shadow-xl p-10'>
      <p className='py-1 text-3xl'>{state === "Sign Up" ? "Create Account" : "Log In"}</p>
      <p className='py-1 text-sm'>Please {state === "Sign Up" ? "create an accout" : "log into your account"} to book movie</p>

      <div className='flex flex-col items-center gap-5 mt-5'>          
        <div className={`${state == "Login" ? "hidden" : "block" }`} >
          <p className='text-xl'>Name</p>
          <input className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 xl:w-[25vw] lg:w-[30vw] md:w-[50vw] sm:w-[60vw] w-[70vw]' type="text" onChange={(e) => setName(e.target.name)} />
        </div>
        <div>
          <p className='text-xl'>Email</p>
          <input className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 xl:w-[25vw] lg:w-[30vw] md:w-[50vw] sm:w-[60vw] w-[70vw]' type="text" value={email} onChange={(e) => setEmail(e.target.email)} />
        </div>
        <div>
          <p className='text-xl'>Password</p>
          <input className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 xl:w-[25vw] lg:w-[30vw] md:w-[50vw] sm:w-[60vw] w-[70vw]' type="text" value={password} onChange={(e) => setPassword(e.target.password)} />
        </div>

        <button className='py-1 px-2 rounded-md mt-3 text-center bg-white border border-gray-400 text-gray-800 text-xl hover:text-white hover:bg-primary transition-all ease-in duration-100 cursor-pointer'>{state === "Sign Up" ? "Create Account" : "Log In"}</button>
        
        <div>
          {
            state === 'Sign Up'
              ? <p>Already have account? <span onClick={()=>setState("Login")} className='text-primary cursor-pointer'>Login</span></p>
              : <p>Don't have an account? <span onClick={()=>setState("Sign Up")} className='text-primary cursor-pointer'>Create here</span></p>
          }
        </div>
      </div>

    </form>
  )
}

export default Login