import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AppContext } from '../context/AppContext';

function Movies() {

    const { genre } = useParams();

    const navigate = useNavigate();

    // console.log(genre)

    const [filterMovies, setFilterMovies] = useState([]);

    const { MoviesData } = useContext(AppContext);

    const applyFilter = () => {
        if (genre) {
            setFilterMovies(MoviesData.filter(mov => mov.path == genre))
        }
        else {
            setFilterMovies(MoviesData)
        }
    };

    useEffect(() => {
        applyFilter();
    }, [MoviesData, genre])

    return (
        <div>
            <p className='text-3xl font-semibold text-center text-gray-600'>Explore all available and upcoming titles.</p>
            <div>
                <div className='flex flex-wrap justify-start gap-1 sm:my-3 my-1'>
                    <p onClick={() => genre === 'action' ? navigate('/movies') : navigate('/movies/action')}  className={`py-2 px-3 border-2 font-semibold hover:bg-white  hover:text-primary transition-all duration-150 cursor-pointer grow min-w-40 ${ genre === 'action' ? 'bg-white text-primary border-primary' : 'bg-primary border-primary text-white'}`}>Action</p>

                    <p onClick={() => genre === 'scifi' ? navigate('/movies') : navigate('/movies/scifi')} className={`py-2 px-3 border-2  font-semibold hover:bg-white  hover:text-primary transition-all duration-150 cursor-pointer grow min-w-40 ${ genre === 'scifi' ? 'bg-white text-primary  border-primary' : 'bg-primary border-primary text-white'}`}>Science Fiction</p>

                    <p onClick={() => genre === 'superhero' ? navigate('/movies') : navigate('/movies/superhero')} className={`py-2 px-3 border-2  font-semibold hover:bg-white  hover:text-primary transition-all duration-150 cursor-pointer grow min-w-40 ${ genre === 'superhero' ? 'bg-white text-primary border-primary' : 'bg-primary border-primary text-white'}`}>Superhero</p>

                    <p onClick={() => genre === 'comedy' ? navigate('/movies') : navigate('/movies/comedy')} className={`py-2 px-3 border-2  font-semibold hover:bg-white  hover:text-primary transition-all duration-150 cursor-pointer grow min-w-40 ${ genre === 'comedy' ? 'bg-white text-primary border-primary' : 'bg-primary border-primary text-white'}`}>Comedy</p>
                </div>
                <div className='flex flex-wrap gap-5 justify-center 2xl:justify-start '>
                    {filterMovies.map((item, index) => (

                        <div onClick={() => navigate(`/booking/${item._id}`)} key={index} className=' bg-gray-100 grow flex w-140 rounded-lg hover:translate-y-[-5px] transition-all duration-400 cursor-pointer'>
                            <div className='flex-1'>
                                <img src={item.img} alt="" className='xl:min-w-70 md:min-w-60 min-w-50 grayscale-50 hover:grayscale-0 ' />
                            </div>

                            <div className='pl-2 pt-2 relative flex-2'>
                                <p className='sm:text-xl text-lg font-bold'>{item.name.toUpperCase()}</p>
                                <p className='sm:text-xl text-lg font-semibold'>{item.part}</p>
                                <p className='sm:text-lg text-md text-primary font-semibold'>{item.genre}</p>
                                <p className='sm:text-lg text-xs font-semibold'>{item.about}</p>
                                <p className='sm:text-xl text-lg text-gray-700 absolute sm:bottom-0'>{item.duration}</p>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movies