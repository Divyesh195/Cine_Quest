import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

function AddMovies() {

  const [movImg, setMovImg] = useState(false);
  const [name, setName] = useState('');
  const [part, setPart] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [about, setAbout] = useState('');
  const [price, setPrice] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { backendURL, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (!movImg) {
        return toast.error("Please upload image")
      }

      const formdata = new FormData();

      formdata.append('image', movImg)
      formdata.append('name', name)
      formdata.append('part', part)
      formdata.append('email', email)
      formdata.append('password', password)
      formdata.append('genre', genre)
      formdata.append('duration', duration)
      formdata.append('about', about)
      formdata.append('price', price)

      formdata.forEach((value, key) => {
        console.log(`${key} : ${value}`)
      })

      const { data } = await axios.post(backendURL + '/api/admin/add-movie', formdata, { headers: { aToken } })

      if (data.success) {

        setMovImg(false)
        setName('')
        setPart('')
        setDuration('')
        setAbout('')
        setPrice('')
        setEmail('')
        setPassword('')

        toast.success(data.message)

      } else {
        toast.error(data.message)
      }


    } catch (error) {
      toast.error(error)
      console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-[70vw]'>
      <p className='text-3xl' >Add Movie</p>

      <div className='bg-gray-100 rounded-xl mt-5 p-5'>

        <div className='flex items-center gap-2'>
          <label htmlFor="mov-id">
            <img src={movImg ? URL.createObjectURL(movImg) : assets.movie_img} alt="" className='w-30 rounded-lg' />
          </label>

          <input onChange={(e) => setMovImg(e.target.files[0])} type="file" id='mov-id' hidden />
          {
            movImg ? <p className='text-lg'>Uploaded</p>
              : <p className='text-lg'>Upload poster <br /> High resolution is recommended</p>
          }

        </div>

        <div className='flex flex-col gap-5 mt-4 text-lg'>

          <div className='flex w-full gap-5'>

            <div className='flex-1 '>
              <p className='mb-2'>Name :</p>
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter Name' required className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 w-[90%]' />
            </div>

            <div className='flex-1'>
              <p className='mb-2 '>Part :</p>
              <input onChange={(e) => setPart(e.target.value)} value={part} type="text" placeholder='Enter part' className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 w-[90%]' />
            </div>

          </div>

          <div className='flex w-full gap-5'>
            <div className='flex-1'>
              <p className='mb-2'>Genre :</p>
              <select onChange={(e) => setGenre(e.target.value)} value={genre} name="" id="" className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 w-[90%]' required>
                <option value="" defaultChecked>  </option>
                <option value="Action">Action</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Superhero">Superhero</option>
                <option value="Comedy">Comedy</option>
              </select>
            </div>

            <div className='flex-1'>
              <p className='mb-2'>Duration :</p>
              <input onChange={(e) => setDuration(e.target.value)} value={duration} type="text" placeholder='00H 00M' required className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 w-[90%]' />
            </div>
          </div>


          <div className='flex w-full gap-5'>
            <div className='flex-1'>
              <p className='mb-2'>About :</p>
              <textarea onChange={(e) => setAbout(e.target.value)} value={about} cols="50" placeholder='Type about movie' required className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 w-[90%]' />
            </div>

            <div className='flex-1'>
              <p className='mb-2'>Price :</p>
              <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='Enter Price' required className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 w-[90%]' />
            </div>

          </div>

          <div className='flex w-full gap-5'>

            <div className='flex-1 '>
              <p className='mb-2'>Distributor Email :</p>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter email' required className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 w-[90%]' />
            </div>

            <div className='flex-1'>
              <p className='mb-2'>Password :</p>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Enter password' className='rounded-md outline-gray-300 focus:outline-primary outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 py-2 pl-2 w-[90%]' required />
            </div>

          </div>

          <button className='text-white bg-primary text-xl py-1 px-3 rounded-sm hover:text-white hover:bg-gray-800 hover:border-gray-800 transition-all ease-in duration-200 cursor-pointer w-[20%] max-w-50 min-w-30'> ADD </button>
        </div>

      </div>

    </form>
  )
}

export default AddMovies