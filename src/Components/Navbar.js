import React from 'react'
import logo from '../Assets/Logo Big.png'
const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navlogo">
                <img src={logo} alt="" />
            </div>
            <div className="navlinks">
                <a className='navlink' href="/">Telegram</a>
                <a className='navlink' href="/">Twitter</a>
                <a className='navlink' href="/">Docs</a>
                <a className='navlink' href="/">$HEARTAI</a>
            </div>
            <button className="navbtn">Try Heart</button>
        </div>
    </>
  )
}

export default Navbar
