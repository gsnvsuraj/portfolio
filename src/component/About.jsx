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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae dolorem veniam harum vero eius deleniti, doloremque earum sunt nulla corrupti quia neque delectus asperiores incidunt laudantium nostrum id ab.
                        </div>



                    </div>

                    <div className="skillsPage">
                        <Title title="Skills" />

                        <div className="skillsBody">

                            <ul className="skillsList">
                                <li><FaTerminal className="bulletPoint"/> Worked with<span className="skill" tooltip="Python"><FaPython /></span>. Used it for several projects and also for solving coding problems.</li>
                                <li><FaTerminal className="bulletPoint"/> Used<span className="skill" tooltip="Java"><FaJava /></span>for developing micro services.</li>
                                <li><FaTerminal className="bulletPoint"/> Developed Web Apps using<span className="skill" tooltip="React"><FaReact /></span>, along with CSS and<span className="skill" tooltip="Bootstrap"><FaBootstrap /></span>.</li>
                                <li><FaTerminal className="bulletPoint"/> Have used<span className="skill" tooltip="Git"><FaGitAlt /></span>for several projects.</li>
                                <li><FaTerminal className="bulletPoint"/> Created micro service with<span className="skill" tooltip="Quarkus"><SiQuarkus /></span>framework and used<span className="skill" tooltip="Docker"><SiDocker /></span>for various other services.</li>
                                <li><FaTerminal className="bulletPoint"/> Familiar working with<span className="skill" tooltip="Windows"><FaWindows /></span>and<span className="skill" tooltip="Linux"><FaLinux /></span> Operating systems.</li>
                            </ul>
                            
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default About;