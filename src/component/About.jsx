import { Component } from 'react';
import { FaPython, FaJava, FaBootstrap, FaReact, FaGitAlt, FaWindows, FaLinux, FaUbuntu } from 'react-icons/fa';
import { SiApachekafka, SiPostgresql, SiMicrosoftoffice, SiDocker, SiQuarkus } from 'react-icons/si';


class About extends Component {
    render() {
        return (
            <>
                <div className="aboutBody">
                    
                    <div>
                        <div className="aboutHeading">
                            <h1>About</h1>
                        </div>



                    </div>

                    <div className="skilsPage">
                        <div className="skillsHeading">
                            <h1>Skills</h1>
                        </div>

                        <div className="skillsBody">
                            <div className="categoryTitle">Programming Languages</div>
                            <FaPython />
                            <FaJava />
                            <div className="categoryTitle">Web Technologies</div>
                            <FaBootstrap />
                            <FaReact />
                            <SiPostgresql />
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