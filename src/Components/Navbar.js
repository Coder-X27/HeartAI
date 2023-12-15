import React from 'react'
import logo from '../Assets/Logo Big.png'
import { FaGripLines } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [clicked, setclicked] = useState(second)
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
            <input type="checkbox" />
            <button onClick={} id='menu-icon' className='icon'><FaGripLines/></button>
            <button id='close-icon' className='icon'><RxCross2/></button>
        </div>
    </>
  )
}

export default Navbar
