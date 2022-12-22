import React from 'react'
import aboutMepic from '../images/aboutmepicture.png'



export default function about() {
  return (
    <div>
      <div className='aboutMeContent'>
        {/* About Section */}
        <h1>About</h1>
        <p>My name is Trey Bach and I am a Full Stack Developer. I have a passion for coding and I am always looking to learn new things. I just graduated the University of Arizona's Full Stack Coding Bootcamp. 
          I am looking to get into the field of web development and I am excited to see what the future holds. </p>
        <img alt='aboutmepicture' src={aboutMepic}></img>
        <div className='aboutMe' id='About'>
        </div>
       
      </div>
    </div>
  )
}
