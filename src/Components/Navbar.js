import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../Assets/Logo Big.png'

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="navlogomain">
          <img  src={logo} alt="" />
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <a href="/"><li>
            Telegram
            </li></a>
            <a href="/"><li>
              Twitter
            </li></a>
            <a href="/"><li>
              Docs
            </li></a>
            <a href="/"><li>
              $MND
            </li></a>
            <li className="trymini">
              Try Mini
            </li>
          </ul>
        </div>
        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
