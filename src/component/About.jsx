import { Component } from 'react';
import { FaPython, FaJava, FaBootstrap, FaReact, FaGitAlt, FaWindows, FaLinux, FaUbuntu } from 'react-icons/fa';
import { SiApachekafka, SiMicrosoftoffice, SiDocker, SiQuarkus } from 'react-icons/si';
import '../styles/About.css';


class About extends Component {
    render() {
        return (
            <>
                <div className="aboutBody">
                    
                    <div>
                        <div className="aboutHeading">
                            <h1>About</h1>
                        </div>

                        <div className="aboutSection">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae dolorem veniam harum vero eius deleniti, doloremque earum sunt nulla corrupti quia neque delectus asperiores incidunt laudantium nostrum id ab.
                        </div>



                    </div>

                    <div className="skilsPage">
                        <div className="skillsHeading">
                            <h1>Skills</h1>
                        </div>

                        <div className="skillsBody">
                            <div className="category">
                                <div className="categoryTitle">Programming Languages - </div>
                                <div className="skill" tooltip="Python"><FaPython /></div>
                                <div className="skill" tooltip="Java"><FaJava /></div>
                            </div>
                            <div className="categoryTitle">Web Technologies</div>
                            <FaBootstrap />
                            <FaReact />
                            <div className="categoryTitle">Other Technologies</div>
                            <SiApachekafka />
                            <FaGitAlt />
                            <SiQuarkus />
                            <SiDocker />
                            <SiMicrosoftoffice />
                            <div className="categoryTitle">Operating Systems</div>
                            <FaWindows />
                            <FaLinux />
                            <FaUbuntu />
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default About;