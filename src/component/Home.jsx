import React from 'react';
import '../styles/Home.css';

import Intro from './Intro';
import Projects from './Projects';
import About from './About';


const Home = () => {
    return ( 
        <>

            <div className="homeBody">
                
                <div className="introPage">
                    <Intro />
                </div>

                <div className="aboutPage">
                    <About />
                </div>

                <div className="projectsPage">
                    <Projects />
                </div>


            </div>
        </>
    );
}
 
export default Home;