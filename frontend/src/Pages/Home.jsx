import React from 'react'
import Header from '../components/Header'
import GenreMenu from '../components/GenreMenu'
import TopMovies from '../components/TopMovies'
import Banner from '../components/Banner'

function Home() {
  return (
    <>
      <Header />
      <GenreMenu />
      <TopMovies />
      <Banner />
    </>
  )
}

export default Home