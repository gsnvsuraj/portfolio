import { Component } from 'react';
import Title from './Title';
import { FaPython, FaJava, FaBootstrap, FaReact, FaGitAlt, FaWindows, FaLinux, FaUbuntu } from 'react-icons/fa';
import { SiApachekafka, SiDocker, SiQuarkus } from 'react-icons/si';
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
                            <div className="category category1">
                                <div className="categoryTitle">Programming Languages</div>
                                
                                <div className="skill" tooltip="Python"><FaPython /></div>
                                <div className="skill" tooltip="Java"><FaJava /></div>
                            </div>

                            <div className="category category2">                                
                                <div className="skill" tooltip="React"><FaReact /></div>
                                <div className="skill" tooltip="Bootstrap"><FaBootstrap /></div>

                                <div className="categoryTitle">Web Technologies</div>
                            </div>

                            <div className="category category3">
                                <div className="categoryTitle">Other Technologies</div>
                                
                                <div className="skill" tooltip="Git"><FaGitAlt /></div>
                                <div className="skill" tooltip="Quarkus"><SiQuarkus /></div>
                                <div className="skill" tooltip="Docker"><SiDocker /></div>
                                <div className="skill" tooltip="Kafka"><SiApachekafka /></div>
                            </div>

                            <div className="category category4">                                
                                <div className="skill" tooltip="Windows"><FaWindows /></div>
                                <div className="skill" tooltip="Linux"><FaLinux /></div>
                                <div className="skill" tooltip="Ubuntu"><FaUbuntu /></div>

                                <div className="categoryTitle">Operating System</div>
                            </div>

                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default About;