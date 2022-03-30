import React from 'react'
import './about.css'
import ME from '../../assets/me_outside.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="outside image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>No experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Not a single soul</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Less than 5</small>
            </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat distinctio sequi nesciunt optio quidem necessitatibus voluptatibus sunt quae debitis! Aliquam ab expedita ducimus distinctio voluptate rem autem, quia officia unde.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
      </div>
      </div>
    </section>
  )
}

export default About