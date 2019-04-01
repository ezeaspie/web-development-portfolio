import React from "react"
import Layout from "../components/layout"
import Tech from '../components/tech';
import SEO from "../components/seo"
import projects from '../components/projectData';
import GitHub from '../images/github-circle.png';
import Web from '../images/web.png';
import ProjectButton from '../components/projectButton';
import Skyline from '../images/skyline.png';
import ContactForm from '../components/contactForm';
import Fade from 'react-reveal/Fade';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="big-info">
        <ul className="clouds">
          <li className="cloud x1"></li>
          <li className="cloud x5 cloud-circle"></li>
          <li className="cloud x3 cloud-circle"></li>
          <li className="cloud x4 cloud-small"></li>
          <li className="cloud x2"></li>
          <li className="cloud x6 cloud-small"></li>
          <li className="cloud x7 cloud-circle"></li>
        </ul>
        <h2>Based in <span className="accent-main">Washington D.C</span>, I love to develop <span className="accent-main">functional and beautiful websites and applications</span> using modern tools and frameworks.</h2>
        <img className="skyline" src={Skyline} alt="washington dc Skyline"></img>
    </div>

    <div className="about-category" id="about">
      <div className="content-container-default">
        <h2>About me</h2>
        <h3>Hello!<span role="img" aria-label="hand-waving">👋🏻</span></h3>
        <p>I make <span className="accent-blue">websites and web applications</span> using the latest in web-development technology. I work primarily on the <span className="accent-blue">front-end</span>, using <span className="accent-blue">JavaScript frameworks, HTML, and CSS</span> to turn an idea into a beautiful and usable reality. I am capable of designing <span className="accent-blue">interfaces and experiences</span> using raster graphic software like <span className="accent-blue">Adobe Photoshop</span>. I also have some experience with <span className="accent-blue">back-end technologies</span> such as Node.js.</p>
        <p>When not hacking away at a project, I spend time <span className="accent-blue">drawing comics and writing</span>.</p>
      </div>
      </div>

    <Tech/>
    <div className="project-category" id="projects">
      <h2>Projects</h2>
      <ul className="project-list">
        {
          projects.map((project)=>{
            return(
              <Fade bottom>
              <li className="project">
                <div className="project-images" style={{background: project.color}}>
                  {
                    project.images.map((image,i)=>{
                      return (<div className="project-image"><img  src={image} alt={project.name + i}/></div>)
                    })
                  }
                </div>
                <div className="project-header">
                  <h3 style={{background: project.color}}>{project.name}</h3>
                  <nav>
                  <ProjectButton 
                  project={project} 
                  image={GitHub}
                  link={project.links[0]}
                  tooltip={"View Code on Github"} />
                  <ProjectButton 
                  project={project} 
                  image={Web} 
                  link={project.links[1]}
                  tooltip={"View Live Demo"}/>
                  </nav>
                </div>
              {project.description}
              <ul className="skills">
                {
                  project.skills.map((skill)=>{
                    return <li  style={{background: project.color}} className="skill"><p>{skill}</p></li>
                  })
                }
              </ul>
              </li> 
              </Fade>
            )
          })
        }
      </ul>
      <ContactForm/>
    </div>
  </Layout>
)

export default IndexPage
