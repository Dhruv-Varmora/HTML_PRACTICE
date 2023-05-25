import React from 'react';
import Navbar from './navbar';
import Management from './Management';
import Autopilot from './Auto-pilot';
import Peace from './Peace';

function Main(props) {
    return (
        <>
            <Navbar/>
            <Management/>
            <Autopilot/>
            <Peace/>
        </>
    );
}

export default Main;