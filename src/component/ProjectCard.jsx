import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className="projCardBody">

            <div className="projImage">
                <img src="https://unsplash.it/300/180" alt="project" />
            </div>

            <div className="projCard">

                <div className="projTitle">
                    <h3>{props.obj.title}</h3>
                </div>

                <div className="projDesc">
                    <p>{props.obj.description}</p>
                </div>

                <div className="projBuilt">
                    <p><b>Built on</b> : {props.obj.built_on}</p>
                </div>

                <div className="projLink">
                    <a href={props.obj.github_link}>View on Github</a>
                </div>
                
            </div>
        </div>
    );
}

export default ProjectCard;