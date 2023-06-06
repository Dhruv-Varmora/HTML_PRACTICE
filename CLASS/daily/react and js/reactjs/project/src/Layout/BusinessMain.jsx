import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import Pwd from './pwdManagement';

function BusinessMain(props) {
    return (
        <>
           <Navbar/>
           <Pwd/>
           <Footer/>
        </>
    );
}

export default BusinessMain;