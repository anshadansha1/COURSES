import React from 'react'

import {Link} from 'react-router-dom';

import Logo from '../movieLogo.png'
const Navbar = () => {
  return (
    <div class='flex border space-x-8 items-center pl-3 py-4'>
        <img className='w-[50px]' src={Logo} alt=""/>

        <Link to='/' className='text-blue-500 text-3xl font-bold'>Movies</Link>
        <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar