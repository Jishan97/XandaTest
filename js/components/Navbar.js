import React from 'react';
import telephone from '../../assets/telephone.png'
import flag from '../../assets/flag.png'


const Navbar = ()=>{
    return(
        <nav className="nav">

            <ul className="nav-item">
            <li><img src={telephone} height="18" alt="" srcset="" /></li>
            <li>1337 1337 1337 </li>
            </ul>

            <ul className="nav-item">
            <li><img src={flag} alt="" height="18" srcset="" /></li>
            <li>Try another castle</li>
            </ul>
            

        </nav>
    )
}

export default Navbar;