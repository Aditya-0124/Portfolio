import React from "react";
import './projects.css';
import Project1 from'../../images/portfolio-1.png';
import Project2 from'../../images/portfolio-2.png';
import Project3 from'../../images/portfolio-3.png';

const Projects = () => {
    return(
        <section id="project">
            <h2 className="projectsTitle">My Portfolio</h2>
            <span className="projectsDesc">I take pride in paying attention to the smallest details and </span>
            <div className="projectsImgs">
                <img src={Project1} alt="" className="projectsImg" />
                <img src={Project2} alt="" className="projectsImg" />
                <img src={Project3} alt="" className="projectsImg" />
            </div>
            <button className="projectsBtn">See More</button>
        </section>
    );
}

export default Projects;