import React from 'react';
import Navbar from './navbar';
import StoreWrapper from './storeWrapper';
import Grocery from './grocery';


function main(props) {
    return (
        <div>
            <Navbar/>
            <StoreWrapper/>
            <Grocery/>
        </div>
    );
}

export default main;