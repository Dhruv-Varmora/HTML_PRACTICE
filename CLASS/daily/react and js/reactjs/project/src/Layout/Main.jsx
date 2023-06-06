import React from 'react';
import Navbar from './navbar';
import Management from './Management';
import Autopilot from './Auto-pilot';
import Peace from './Peace';
import Trust from './trust';
import PersonalBusiness from './personalBusiness';
import Plan from './Plan';
import Footer from './Footer';

function Main(props) {
    return (
        <>
            <Navbar/>
            <Management/>
            <Autopilot/>
            <Peace/>
            <Trust/>
            <PersonalBusiness/>
            <Plan/>
            <Footer/>
        </>
    );
}

export default Main;