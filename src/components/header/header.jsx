import react from "react";
// import Categories from "./categories";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import Dropdown from "./dropDown";
import './header.css'
import Dropdown2 from "./dropDown2"

const Header = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          logo
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'
         
          >
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link
              to='/tours'
              className='nav-links'
              onClick={closeMobileMenu}>
              Tours 
            </Link>
            
          </li>
          <li className='nav-item'>
            <Link
              to='/blog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li  className='nav-item'
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}
              >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu} >
              Kyrgyzstan <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}

            
          </li>
          <li className='nav-item'
           onMouseEnter={onMouseEnter2}
           onMouseLeave={onMouseLeave2} 
            >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}>
              About <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
     
}

export default Header;