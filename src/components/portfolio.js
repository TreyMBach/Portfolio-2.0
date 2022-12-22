import React from 'react'

export default function portfolio() {
  const projects = [
    {
      title: 'Experimental Music',
      description: 'Find an easy way to find new music',
      image: 'assets/ExperimentalMusic.png',
      link: 'https://github.com/JashawnRogers/Experimental-Music',
    },
    {
      title: 'ReadME Generator',
      description: 'To be able to create a ReadME file in the terminal',
      image: 'assets/ReadMEGen.png',
      link: 'https://github.com/TreyMBach/ReadME-Generator',
    },
    {
      title: 'Weather Dashboard',
      description: 'To be able to see the future forecast.',
      image: 'assets/weatherdashboard.png',
      link: 'https://github.com/TreyMBach/WeatherDashboard',
    },
    {
      title: 'Project 4',
      description: 'This is a project that I worked on',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com',
    },
    {
      title: 'Project 5',
      description: 'This is a project that I worked on',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com',
    },
    {
      title: 'Project 6',
      description: 'This is a project that I worked on',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com',
    }
  ]
  return (
    <div>
      <div className='portfolioContent'>
        {/* Portfolio Section */}
        <h1>Portfolio</h1>
        <p>Here are some of my projects that I have worked on.</p>
        <div className='portfolio' id='Portfolio'>
          <div className='portfolio-container'>
            {projects.map((project, index) => (
              <div className='project' key={index}>
                <h3>{project.title}</h3>
                <a href={project.link}>
                <img src={project.image} alt={project.title} /></a>
                <p>{project.description}</p>
              </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  )
}
