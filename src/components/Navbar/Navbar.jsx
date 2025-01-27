import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right="0px";
    }

    const closeMenu = () =>{
        menuRef.current.style.right = '-350px';
    }
  return (
    <div className='navbar'>
        {/* <img src={logo} alt="logo" /> */}
         <h1>M̷A̷A̷Z̷</h1>
        {/* <h1>معاز</h1> */}
        <img src={menu_open}  onClick={openMenu} alt='' className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
           <AnchorLink className='anchor-link' offset={50} href='#home'><li>Home</li></AnchorLink> 
           <AnchorLink className='anchor-link' offset={50} href='#about'><li>About Me</li></AnchorLink>
           <AnchorLink className='anchor-link' offset={50} href='#services'><li>Services</li></AnchorLink> 
           <AnchorLink className='anchor-link' offset={50} href='#work'><li>Portfolio</li></AnchorLink>
           <AnchorLink className='anchor-link' offset={50} href='#contact'><li>Contact</li></AnchorLink> 
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink></div>
    </div>
  )
}

export default Navbar