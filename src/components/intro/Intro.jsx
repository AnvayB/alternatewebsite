import React from 'react'
import './Intro.css'
import me from '../../img/face.png'

const Intro = () => {
  return (
    <div className="main">
      
        <div className="main-left">
            <div className="main-left-wrapper">
              <h2 className="main-intro">Hi, My name is</h2>
              <h1 className="main-name">John Burton</h1>

              <div className="main-title">
                <div className="main-title-wrapper">
                  <div className="main-title-item">Web Developer</div>
                  <div className="main-title-item">UI/UX</div>
                  <div className="main-title-item">Photographer</div>
                  <div className="main-title-item">Writer</div>
                  <div className="main-title-item">Content Creator</div>
                </div>
              </div>
              <div className="main-desc">
                I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services, and online stores.
              </div>
            </div>
        </div>
      <div className="main-right">
        <div className="main-bg">
          
        </div>
        <img src={me} alt="" className="main-img"/>
      </div>
    </div>
  ) 
}

export default Intro