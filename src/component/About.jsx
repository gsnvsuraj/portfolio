import { Component } from 'react';
import Title from './Title';
import { FaPython, FaJava, FaBootstrap, FaReact, FaGitAlt, FaWindows, FaLinux, FaTerminal } from 'react-icons/fa';
import { SiDocker, SiQuarkus } from 'react-icons/si';
import '../styles/About.css';


class About extends Component {
    render() {
        return (
            <>
                <div className="aboutBody">
                    
                    <div>
                        <Title title="About" />

                        <div className="aboutSection">
                            <ul className="aboutList">
                                <li>An enthusiastic Web and Software Developer</li>
                                <li>Seeking to work in a fun and challenging environment</li>
                                <li>Eager to learn and work with new skills and technologies</li>
                                <li>Being a team player, to support and coordinate with each other</li>
                            </ul>
                        </div>



                    </div>

                    <div className="skillsPage">
                        <Title title="Skills" />

                        <div className="skillsBody">

                            <ul className="skillsList">
                                <li><FaTerminal className="bulletPoint"/> Worked with <span className="skill" tooltip="Python"><FaPython /></span> on several projects and for solving coding problems.</li>
                                <li><FaTerminal className="bulletPoint"/> Developed microservices with <span className="skill" tooltip="Java"><FaJava /></span> .</li>
                                <li><FaTerminal className="bulletPoint"/> Built web applications utilizing <span className="skill" tooltip="React"><FaReact /></span>, CSS and <span className="skill" tooltip="Bootstrap"><FaBootstrap /></span> .</li>
                                <li><FaTerminal className="bulletPoint"/> Worked with<span className="skill" tooltip="Git"><FaGitAlt /></span> on a number of projects.</li>
                                <li><FaTerminal className="bulletPoint"/> Created micro-services using <span className="skill" tooltip="Quarkus"><SiQuarkus /></span> and <span className="skill" tooltip="Docker"><SiDocker /></span> for deployong other services.</li>
                                <li><FaTerminal className="bulletPoint"/> Experienced in working with the <span className="skill" tooltip="Windows"><FaWindows /></span> and <span className="skill" tooltip="Linux"><FaLinux /></span> based Operating systems.</li>
                            </ul>
                            
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default About;