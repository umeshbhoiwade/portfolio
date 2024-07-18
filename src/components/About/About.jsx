import React from 'react'
import './About.css'
import profile_img from '../../assets/profile-pic1 .png'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an enthusiastic Frontend Developer with a strong foundation in web development and a particular focus on ReactJS. I have a passion for creating user-friendly and visually appealing web applications.</p>
                <p>Though I am relatively new to the industry, I am a fast learner, highly motivated, and eager to contribute to exciting projects and grow my skill set.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} />70%</div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} />60%</div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}} />50%</div>
                <div className="about-skill"><p>Java</p><hr style={{width:"20%"}} />30%</div>
                
            </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  )
}

export default About
