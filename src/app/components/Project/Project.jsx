'use client'
import './projects.css'
import Image from 'next/image'


// List of projects //

const portfolio = [{
    id: 1,
    img: require('../../assets/projects/climbing-website.png'),
    alt: "climbing website",
    title: "Getting into Climbing",
    info: "Basic website for those interested in learning to climb",
    tags: "HTML, CSS",
    github: "https://github.com/Raxxius/climbing_website",
    website: "https://raxxius.github.io/climbing_website/"
  },
  {
    id: 2,
    img: require('../../assets/projects/photo-website.png'),
    alt: "photo website",
    title: "Photo Website",
    info: "Custom JS hero picture and sortable galleries",
    tags: "HTML, CSS, JavaScript",
    github: "https://github.com/Raxxius/PhotoWebsite",
    website: "https://raxxius.github.io/PhotoWebsite/"
  },
  {
    id: 3,
    img: require('../../assets/projects/tribute-page.png'),
    alt: "tribute website",
    title: "Tribute website",
    info: "FreeCodeCamp responsive web design course",
    tags: "HTML, CSS",
    github: "https://github.com/Raxxius/Tribute_page_Alex_Honnold",
    website: "https://raxxius.github.io/Tribute_page_Alex_Honnold/"
  },
  {
    id: 4,
    img: require('../../assets/projects/climbing-survey.png'),
    alt: "react online form",
    title: "React online form",
    info: "FreeCodeCamp responsive web design course",
    tags: "HTML, CSS, REACT",
    github: "https://github.com/Raxxius/react-form",
    website: "https://raxxius.github.io/react-form/"
  },
  {
    id: 5,
    img: require('../../assets/projects/climbing-survey.png'),
    alt: "react online form",
    title: "React online form",
    info: "FreeCodeCamp responsive web design course",
    tags: "HTML, CSS, REACT",
    github: "https://github.com/Raxxius/react-form",
    website: "https://raxxius.github.io/react-form/"
  },
]

// Project card //
const Project = (props) => {
  return (
    <div className='project-box'>
      <div className='project-img-box'> 
          <Image className='project-img' src={props.img} alt={props.alt}></Image>
      </div>
      <h1 className='project-title'> {props.title}</h1>
      <h2 className='project-description'> {props.info} </h2>
      <h2 className='project-tag'> {props.tags} </h2>
      <div className='project-links'>
        <a href={props.website} className='project-link' target="_blank" rel="noreferrer"><h3>Website</h3></a>
        <a href={props.github} className='project-link' target="_blank" rel="noreferrer"><h3>Github</h3></a>
      </div>
    </div>
  )
}

const Projects = (props) => {
  const projects = portfolio.map(project => {
    return (
      <Project 
        key={project.id}
        {...project}
      />
    )
  })
  return (
    <section id="project" className={props.darkMode?'project project-dark':'project'}>
      <h1 className='project-title'>Here are some of my Projects</h1>
      <div className='projects'>
        {projects}
      </div>

    </section>  
  )
}

export default Projects