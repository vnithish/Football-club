import React, { useState } from 'react'
import './Header.css';
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false; 
  
  const [menuOpened,setMenuOpened] = useState(false)
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />

{(menuOpened === false && mobile === true )? (
  <div style={{backgroundColor: 'var(--appColor)',padding : '0.5rem',borderRadius:'5px'}} 
  onClick = {()=> setMenuOpened(!menuOpened)} 
  >
  <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem' }}/>
  </div>
):(<ul className='header-menu'>
<li onClick={() => setMenuOpened(false)}>
  <Link to = 'home' spy = {true} smooth = {true}  activeClass = "active" onClick={() => setMenuOpened(false)}>Home</Link>
</li>
<li onClick={() => setMenuOpened(false)}>
  <Link to = 'programs' spy = {true} smooth = {true} onClick={() => setMenuOpened(false)}>Programs</Link>
</li>
<li onClick={() => setMenuOpened(false)}>
  <Link to = 'why' spy = {true} smooth = {true} onClick={() => setMenuOpened(false)}>Why Us</Link>
</li>
<li  onClick={() => setMenuOpened(false)} >
  <Link to = 'Testimonials' spy = {true} smooth = {true} onClick={() => setMenuOpened(false)}>Testimonials</Link>
</li>
</ul>
)
}
    </div>
  )
}

export default Header