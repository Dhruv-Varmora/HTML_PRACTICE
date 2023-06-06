import React from 'react';


function navbar(props) {
    return (
        <div className='container-fluid fixed-top'>
            <div className='navigation d-flex justify-content-between p-3'>
                <div className="bar">
                <i class="fa-solid fa-bars"></i>
                </div>
                <div className="logo">
                    <img src="img/lastpass.png" alt="logo" />
                </div>
                <div className="freebtn">
                    <button className='btn'>Get Last Free</button>
                </div>
            </div>
            <hr className='hr1'/>
        </div>
    );
}

export default navbar;