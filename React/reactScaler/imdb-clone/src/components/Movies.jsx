import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

function Movies() {
  const [movies ,setMovies] = useState([])

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b74701ad1911d34542eb570df56d7069&language=en-US&page=2`).then(function(res){
      setMovies(res.data.results) //all the data about movies is here
    })
  },[])

  return (
    <div>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-3'>
        
        {movies.map((movieObj)=>{
          return <MovieCard poster_path={movieObj.poster_path} name ={movieObj.original_title}/>
        })}

      </div>
    </div>
  )
}

export default Movies
