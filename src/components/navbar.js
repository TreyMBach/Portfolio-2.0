import React from 'react';
import '../css/home.css';
import Hamburger from './hamburger';

export default function navbar({ currentPage, handlePageChange }) {


  return (
    <div>
        {/* Navbar Section */}
    <div className='navbar'>

    {/* List Elements for the navbar including the Home, About, Portfolio, Contact Section */}
    <ul className='nav-list'>
        <li className='list-items'>
            <a id='nameHeader' href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                Home
            </a>
        </li>
        <li className='list-items'>
            <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About
            </a>
        </li>
        <li className='list-items'>
            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </a>
        </li>
        <li className='list-items'>
            <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact Me
            </a>
        </li>
        <li className='list-items'>
            <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
        </li>

        <li> 
            <h3 id="emailMe"><a href="mailto:treybachdev@gmail.com">Email Me!</a></h3>
        </li>

    </ul>

    <div className='hamburger'>
        <Hamburger />
    </div>


    </div> 
    </div>
    
  )
}
