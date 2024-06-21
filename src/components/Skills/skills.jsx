import React from "react";
import './skills.css';
import UIDesign from '../../images/ui-design.png'
import WebDesign from '../../images/website-design.png'

const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am an Aspiring web developer skilled in HTML, CSS, and JavaScript, with experience in React. Passionate about creating responsive websites and eager to learn and grow in a dynamic team environment.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;