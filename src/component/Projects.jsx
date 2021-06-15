import { Component } from 'react';
import data from '../data/Projects.json';
import ProjectCard from './ProjectCard';


class Projects extends Component {
    render() {
        return (
            <>
                <div className="projectsBody">
                    
                    <div>
                        <div className="projectsHeading">
                            <h1>Notable Projects</h1>
                        </div>

                        <div>
                            {
                                data.projects.map(
                                    (projectObj, index) => {
                                        <div>
                                            <ProjectCard key={index} obj={projectObj} />
                                        </div>
                                    }
                                )
                            }
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default Projects;