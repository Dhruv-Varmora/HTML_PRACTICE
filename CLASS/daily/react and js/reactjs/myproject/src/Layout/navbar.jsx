import React from 'react';

function navbar(props) {
    return (
        <div className='container-fluid fixed-top bg-primary'>
            <div className='navigation d-flex justify-content-between p-3'>
                <div className="bar bg-success">
                <i class="fa-solid fa-bars"></i> 
                <img src="img/logo.webp" alt="logo" />   
                </div>
                <div className="inputdiv bg-warning">
                    <input type="text" placeholder='Search products, stores, and recipes' />
                </div>
                <div className="bg-info">
                    <span><i class="fa-solid fa-location-dot"></i> 94105 <i class="fa-solid fa-chevron-down"></i></span>
                    <button className='btn btn-success'>Log in</button>
                    <span><i class="fa-solid fa-cart-shopping"></i> 0</span>
                </div>
            </div>
        </div>
    );
}

export default navbar;