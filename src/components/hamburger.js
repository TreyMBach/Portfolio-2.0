import React from 'react'
import '../css/home.css'

export default function hamburger() {
  return (
    <div>
        {/* Hamburger Menu */}
        <div className='hamburger'>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
        </div>
    </div>
  )
}
