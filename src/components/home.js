// Import React and useState
import React from 'react';
import '../css/home.css'
import picture from '../images/pfp.png'

const styles = {
  img: {
    width: '25%',
    height: '25%',
    padding: '25px',
  }
}

export default function Home() {
  return (
    <div>
        <div> 
        {/* Home Section */}
        <div className='home' id='Home'>
        <div className='home-content'>
            <h1>Hi, I'm Trey Bach</h1>
            <h2>I am a Full Stack Developer Ready to help your needs </h2>
            <img alt="pictureofMe" src={picture} style={styles.img}></img>
        </div>
        </div>
      </div>
    </div>
    
  )
}
