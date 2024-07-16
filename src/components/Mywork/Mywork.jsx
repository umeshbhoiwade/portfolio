import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index,)=>{
            return <div className="container">
                <img key={index} src={work.w_img} alt="" />
                <div className="text">
                    <span>{work.w_title}</span>
                    <p>{work.w_info}</p></div>
                </div>
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Mywork
