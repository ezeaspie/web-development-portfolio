import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/Logo.png';
import Menu from '../images/menu.png';
import Exit from '../images/exit.png';


const Header = (props,{ siteTitle }) => (
  <header>
    <button className="open-menu" onClick={()=>{
      document.getElementById('app').classList.add("shift");
      return;
    }}>
      <img src={Menu} alt="menu"></img>
    </button>

    <div className="header-main-info">
      <img src={Logo} alt="logo"></img>
      <h1>Ezequiel <span className="accent-main">Espinoza</span></h1>
    </div>

    <nav id="app" className="header-nav">
      <button className="exit-nav" onClick={()=>{
        document.getElementById('app').classList.remove("shift");
        return;
      }}><img src={Exit} alt="menu"></img></button>
      <ul className="nav-link-list">
        <li className="nav-link-container"
            onClick={()=>{
              document.getElementById('app').classList.remove("shift");
              return;
            }}
        >
          <a href="#contact">Contact</a>
          <div className="underline"></div>
        </li>
        <li className="nav-link-container"
          onClick={()=>{
            document.getElementById('app').classList.remove("shift");
            return;
          }}
        >
          <a href="#about">About</a>
          <div className="underline"></div>
        </li>
        <li className="nav-link-container"
        onClick={()=>{
          document.getElementById('app').classList.remove("shift");
          return;
        }}
        >
          <a href="#projects">Projects</a>
          <div className="underline"></div>
        </li>
      </ul>
    </nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
