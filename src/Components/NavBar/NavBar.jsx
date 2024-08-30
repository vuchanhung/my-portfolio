import './NavBar.css'
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <div className='navbar'>
      <img className='logo-size' src={logo} alt='logo'/>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>News</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className='nav-connect'>Connect With</div>
    </div>
  )
}

export default NavBar
