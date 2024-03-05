import React from 'react'
import { Link } from 'react-router-dom';



export const Navbar = () => {
  return (
    <div>  
         <nav className="navbar">

    <ul>
<li><Link to="/">Homepage</Link></li>
<li><Link to="/Aboutpage">Aboutus</Link></li>
<li><Link to="/Countriespage">Countries</Link></li>
<li><Link to="/Countrypage">Country</Link></li>

    
    </ul>
  </nav>
  </div>
  )
}

export default Navbar;