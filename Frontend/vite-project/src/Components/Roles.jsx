import React from 'react'
import { FaSearch } from "react-icons/fa";



const Roles = () => {
  return (
    <div>
            <div>
                <h1>Save your engineering bandwidth</h1>
                <h3>Outsource your interviews in just 2 simple steps</h3>
            </div>
            <div className='searchprofile' >
              <FaSearch />
                <input className='search' type="text" name="Search Profile" id="" placeholder='search job' />
            </div>


        </div>
  )
}

export default Roles
