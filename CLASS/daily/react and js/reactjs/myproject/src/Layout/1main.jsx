import React from 'react';
import Navbar from './navbar';
import StoreWrapper from './storeWrapper';
import Grocery from './grocery';
import Stores from './Stores';


function main(props) {
    return (
        <div>
            <Navbar/>
            <StoreWrapper/>
            <Grocery/>
            <Stores/>
        </div>
    );
}

export default main;