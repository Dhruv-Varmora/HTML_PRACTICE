import React from 'react';
import Navbar from './navbar';
import StoreWrapper from './storeWrapper';
import Grocery from './grocery';
import Stores from './Stores';
// import { Gros } from './Gros';


function main(props) {
    return (
        <div>
            <Navbar/>
            <StoreWrapper/>
            <Grocery/>
            {/* <Gros/> */}
            <Stores/>
        </div>
    );
}

export default main;