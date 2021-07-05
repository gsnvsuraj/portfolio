import { Component } from 'react';
import data from '../data/Footer.json';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitterSquare, FaStackOverflow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

class Footer extends Component {

    render() {
        return(
            <footer className="footer-main">
                
                <div>
                                        
                    <h3 className="footer-fullname">
                        
                        {data.surname} &nbsp;
                        
                        <span className="footer-name">
                            {data.name}
                        </span>

                    </h3>

                </div>

                <div className="footer-center">

                    <div className="footer-quick-links" >
                        <div className="linksHead">Quick Links</div>
                        <div className="footerLinks">
                            <Link to="/" exact="true">Home</Link>
                            <Link to="/intro" exact="true">Intro</Link>
                            <Link to="/about" exact="true">About</Link>
                            <Link to="/projects" exact="true">Projects</Link>
                            <Link to="/contact" exact="true">Contact</Link>
                        </div>
                    </div>

		        </div>

                <div className="footer-media" >

                    <div className="footer-icons" >

                        <a className="footer-links" href={data.links.facebook} target="_blank" rel="noopener noreferrer" ><FaFacebook /></a>
                        <a className="footer-links" href={data.links.github} target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
                        <a className="footer-links" href={data.links.linkedin} target="_blank" rel="noopener noreferrer" ><FaLinkedin /></a>
                        <a className="footer-links" href={data.links.twitter} target="_blank" rel="noopener noreferrer" ><FaTwitterSquare /></a>
                        <a className="footer-links" href={data.links.stackoverflow} target="_blank" rel="noopener noreferrer" ><FaStackOverflow /></a>
                    
                    </div>

                </div>

            </footer>
        )
    }

}

export default Footer;