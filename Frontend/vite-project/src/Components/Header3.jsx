import React from 'react'

import { FaSearch } from "react-icons/fa";

const Header3 = () => {

  const fun = () => {
    const show = document.querySelector('.pop');
    show.style.display = "block"; 
    document.body.style.overflow="hidden"  
  }

  return (
    <div className='Header3'>
      <h1>Save your engineering Bandwidth</h1>
      <h3>Outsource your interviews in just 2 simple steps</h3>

      <div className='searchprofile' onClick={() => fun()}>
        <FaSearch />
        <input className='search' type="text" name="Search Profile" id="" placeholder='search job' />
      </div>

    </div>
  )
}

export default Header3
