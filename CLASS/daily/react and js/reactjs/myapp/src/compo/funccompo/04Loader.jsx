import React, { useEffect, useState } from 'react';
import Compo from '../07Compo';
// import { UseState } from 'react';
// import { UseEffect } from 'react';

function Loader(props) {
    const [loading,setloading]=useState(true)

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 3000);
    })
    return (
        <>
            {loading?
            <div className='text-center'>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
            :
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Compo />
                    </div>
                </div>
            </div>
}
        </>


    );
}

export default Loader;