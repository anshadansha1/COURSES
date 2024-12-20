import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from "./components/Banner";

function App() {

  let  [watchlist ,setWacthList] = useState([]) //Global state for handle watchlist

  //Function to take  the movie and add to watchlist
  let handleAddtoWatchlist = (movieObj)=>{ 
    let newWatchList = [...watchlist , movieObj]
    setWacthList(newWatchList)
    console.log(newWatchList)
  }

  //Function to hanlde remove from watchlist
  let handleRemoveFromWatchlist = (movieObj)=>{
    let filteredWatchlist = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
    setWacthList(filteredWatchlist)
    console.log(filteredWatchlist)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={ <> <Banner/> <Movies handleAddtoWatchlist={handleAddtoWatchlist}
          handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist = {watchlist}/> </>} />

          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
