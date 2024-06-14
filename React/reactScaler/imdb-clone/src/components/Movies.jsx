import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddtoWatchlist , handleRemoveFromWatchlist ,watchlist}) {
  const [movies ,setMovies] = useState([])

  const [pageNo ,setPageNo] = useState(1)

  const handlePrev = ()=>{
    if(pageNo==1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
    
  }

  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b74701ad1911d34542eb570df56d7069&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results) //all the data about movies is here
    })
  },[pageNo])

  return (
    <div>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-3'>
        
        {movies.map((movieObj)=>{
          return <MovieCard poster_path={movieObj.poster_path} name ={movieObj.original_title} 
          handleAddtoWatchList={handleAddtoWatchlist} movieObj={movieObj} key = {movieObj.id}
          handleRemoveFromWatchlist = {handleRemoveFromWatchlist} watchlist={watchlist}/>
        })}

      </div>

      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies
