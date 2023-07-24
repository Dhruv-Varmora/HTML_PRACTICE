import React from 'react';


function navbar(props) {
    
    return (
        <div className='container-fluid fixed-top main'>
            <div className='navigation d-flex  p-3'>
                <div className="bar">
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <img src="img/logo.webp" alt="logo" />
                </div>

                <div className="inputdiv">
                    <input type="text" placeholder='Search products, stores, and recipes' />
                </div>
                <div className="location">
                    <span><i class="fa-solid fa-location-dot"></i> 94105 <i class="fa-solid fa-chevron-down"></i></span>
                </div>
                <div className='login'>
                    <button className='btn'>Log in</button>
                    <span><i class="fa-solid fa-cart-shopping"></i> 0</span>
                </div>
            </div>
        </div>
    );
}

export default navbar;




