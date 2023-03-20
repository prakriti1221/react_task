import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="topbar">
        <a href="">We Have Been Working On Several Voluntary Initiatives During
        The COVID-19 Pandemic. Check Them Out</a>
      </div>
      <nav className="main-nav">
        {/* logo */}
        <div className="logo">
            <img src="./images/logo.png" style={{ width: 120, height: 35 }} className="App-logo" alt="logo" />
        </div>
        {/* menu */}
        <div className="menu-link">
            <ul>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Company</a></li>
                <li><a href="">Events & Media</a></li>
                <li><a href="">Blogs</a></li>
            </ul>
        </div>
        {/* Button */}
        <div className="button">
            <button className="btn"><span>Let's talk</span> </button>
        </div>
      </nav>

      {/* hero section */}
      <div className="container">
        <div className="content">
        <h2>Services</h2>
        <h1>At <span>NAXA</span>, we work on <span>ideas</span>; ideas that
            can provide <span>simple solutions</span> to <span>complex problems.</span> </h1>
        <p>We work as a team to generate, explore, build and validate ideas. 
            We also contextualize innovations around the world to 
            find the best fitting solutions to local problems.</p>
        </div>
      </div>
    </>
  )
}

export default Navbar;
