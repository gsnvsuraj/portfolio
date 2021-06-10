import React from 'react';
import Intro from './Intro';
import Contact from './Contact';

const Routes = {
    "/": () => <Intro />,
    "/contact": () => <Contact />
};

export default Routes;