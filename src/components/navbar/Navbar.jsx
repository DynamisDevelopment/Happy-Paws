import React from 'react'
import { Link } from "gatsby"
import './navbar.sass'

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1 className="logo">Happy Paws</h1>
                <ul>
                    <Link to='#'>About</Link>
                    <Link to='#'>Our Dogs</Link>
                    <Link to='#'>Grooming</Link>
                    <Link to='#'>Coupons</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

