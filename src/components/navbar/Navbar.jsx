import React from 'react'
import { Link } from "gatsby"
import './navbar.sass'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/'><h1 className="logo">Happy Paws</h1></Link>
                <ul>
                    <Link to='/team'>About</Link>
                    <Link to='/ourDogs'>Our Dogs</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/coupons'>Coupons</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

