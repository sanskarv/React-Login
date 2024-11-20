import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header2 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');  // Replace '/about' with the route you want to navigate to
  };
  return (
    <div className='header2'>

        <img className='Convo' src='src/assets/logo.png' />
        <a href="">Become an interview engineer</a>
        <button onClick={handleButtonClick}>Sign-Up</button>
      
    </div>
  )
}

export default Header2
