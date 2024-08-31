import './NavBar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import { useState, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const NavBar = () => {
  const [menu,setMenu]= useState("aboutme");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right='0';
  }
  const closeMenu = ()=>{
    menuRef.current.style.right='-350px';
  }
  return (
    <div className='navbar'>
      <img className='logo-size' src={logo} alt='logo'/>
      <img src={menu_open} onClick={openMenu} className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"?<img src={underline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#aboutme'><p onClick={()=>setMenu("aboutme")}>About Me</p></AnchorLink>{menu=="aboutme"?<img src={underline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#news_page'><p onClick={()=>setMenu("news_page")}>News</p></AnchorLink>{menu=="news_page"?<img src={underline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#achieve'><p onClick={()=>setMenu("achieve")}>Achievement</p></AnchorLink>{menu=="achieve"?<img src={underline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=="contact"?<img src={underline}/>:<></>}</li>
      </ul>
      <div className='nav-connect'><a className='anchor-link' offset={50} href='#contact'>Connect With</a></div>
    </div>
  )
}

export default NavBar
