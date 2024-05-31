import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "../../images/hireme.png"

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Aditya</span><br />Website Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating <br />visually appealing and user friendly websites</p>
                <Link><button className="btn"><img src={btnImg} alt="" className="btnImg"/>Hire Me</button></Link>
            </div>            
        </section>
    )
}

export default Intro;