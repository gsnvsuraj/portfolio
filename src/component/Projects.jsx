import { Component } from 'react';
import data from '../data/Projects.json';
import ProjectCard from './ProjectCard';
import Title from './Title';
import '../styles/Project.css';


class Projects extends Component {
    render() {
        return (
            <>
                <div className="projectsBody">
                    
                    <div>
                        <Title title="Notable Projects" />

                        <div>
                            {
                                data.projects.map(
                                    (projectObj, index) => 
                                        <div>
                                            <ProjectCard key={index} obj={projectObj} />
                                        </div>
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