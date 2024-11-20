import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header1 = () => {

  const navigate=useNavigate();

  return (
    <div className='header1'>
      <div className="header1-first">
        <div className='a'>Outsource Interviews</div>
        <div className='a'>Assessment platform</div>
        <div className='a'>Mock interview</div>
      </div>
      <div className="header1-second">
        <div className='a'>Contact Us</div>
        <div className='a' onClick={(e) => {navigate('/login')}}>Login</div>
      </div>
    </div>
  )
}

export default Header1
