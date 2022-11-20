import { Component } from 'react';
import Title from './Title';
import { FaPython, FaJava, FaBootstrap, FaReact, FaGitAlt, FaWindows, FaLinux, FaTerminal, FaGithub, FaSourcetree, FaConfluence } from 'react-icons/fa';
import { SiKubernetes, SiQuarkus, SiDocker, SiApachekafka, SiCss3, SiHtml5, SiHelm, SiJavascript, SiPostgresql, SiMysql, SiHibernate, SiSpringboot, SiPrometheus, SiGrafana, SiJirasoftware, SiCplusplus } from 'react-icons/si';
import { RiGitlabFill } from 'react-icons/ri';
import '../styles/About.css';


class About extends Component {
    render() {
        return (
            <>
                <div className="aboutBody">
                    
                    <div>
                        <Title title="About" />

                        <div className="aboutSection">
                            Software Developer with over 2 years of experience in developing, maintaining and deploying reactive and robust micro-services for Web and Software Applications in a cloud-based environment. Worked extensively with both small and big teams in an Agile based Scrum Environment. Experienced in working with the modern-day technologies.
                        </div>



                    </div>

                    <div className="skillsPage">
                        <Title title="Skills" />

                        <div className="skillsBody">

                            <ul className="skillsList">
                                <li><FaTerminal className="bulletPoint"/> Worked with <span className="skill" tooltip="Java"><FaJava /></span>, <span className="skill" tooltip="Python"><FaPython /></span> and <span className="skill" tooltip="C++"><SiCplusplus /></span> on several projects and for solving coding problems.</li>
                                <li><FaTerminal className="bulletPoint"/> Developed micro-services and its architecture with <span className="skill" tooltip="Quarkus"><SiQuarkus /></span> and <span className="skill" tooltip="Spring Boot"><SiSpringboot /></span> .</li>
                                <li><FaTerminal className="bulletPoint"/> Facilitated communication between micro-services using <span className="skill" tooltip="Apache Kafka"><SiApachekafka /></span> using topics, Streams, Connectors and Avro Schemas.</li>
                                <li><FaTerminal className="bulletPoint"/> Built web applications utilizing <span className="skill" tooltip="React"><FaReact /></span>, <span className="skill" tooltip="HTML"><SiHtml5 /></span>, <span className="skill" tooltip="CSS"><SiCss3 /></span>, <span className="skill" tooltip="JavaScript"><SiJavascript /></span> and <span className="skill" tooltip="BootStrap"><FaBootstrap /></span> .</li>
                                <li><FaTerminal className="bulletPoint"/> Used Version Control Tools like <span className="skill" tooltip="Git"><FaGitAlt /></span>, <span className="skill" tooltip="Github"><FaGithub /></span>, <span className="skill" tooltip="Gitlab"><RiGitlabFill /></span> and <span className="skill" tooltip="Sourcetree"><FaSourcetree /></span> on a number of projects.</li>
                                <li><FaTerminal className="bulletPoint"/> Deployed micro-services using <span className="skill" tooltip="Kubernetes"><SiKubernetes /></span>, <span className="skill" tooltip="Docker"><SiDocker /></span> and <span className="skill" tooltip="Helm"><SiHelm /></span> in Cloud-based environment.</li>
                                <li><FaTerminal className="bulletPoint"/> Stored data in DataBase Management System like <span className="skill" tooltip="Postgresql"><SiPostgresql /></span>, <span className="skill" tooltip="MySQL"><SiMysql /></span> and <span className="skill" tooltip="Hibernate"><SiHibernate /></span> .</li>
                                <li><FaTerminal className="bulletPoint"/> Monitored the performance and memeory impact of services using <span className="skill" tooltip="Prometheus"><SiPrometheus /></span> and <span className="skill" tooltip="Grafana"><SiGrafana /></span> .</li>
                                <li><FaTerminal className="bulletPoint"/> Experienced in working with the <span className="skill" tooltip="Windows"><FaWindows /></span> and <span className="skill" tooltip="Linux"><FaLinux /></span> based Operating systems.</li>
                                <li><FaTerminal className="bulletPoint"/> Managed User stories and Tasks with <span className="skill" tooltip="JIRA"><SiJirasoftware /></span> and documented various use cases and features with <span className="skill" tooltip="Confluence"><FaConfluence /></span> .</li>
                            </ul>
                            
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default About;