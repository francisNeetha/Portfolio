import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Neetha</span><br />Website Designer</span>
        <p className="introPara">I am a skilled and passionate web developer with experience in creating visual<br /> appending and user-friendly websites. </p>
        <Link><button className="btn">Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg"/>
    </section>

  )
}

export default Intro;