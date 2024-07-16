import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-pic1 .png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Umesh Bhoiwade,</span><h2>A Frontend Developer particular focus on ReactJS.</h2></h1>
      <p> I have a passion for creating user-friendly and visually appealing web applications. Though I am relatively new to the industry, I am a fast learner, highly motivated, and eager to contribute to exciting projects and grow my skill set.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href="../../assets/UMESH_RESUME.pdf" download="UMESH_RESUME.pdf" className='resume' >My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
