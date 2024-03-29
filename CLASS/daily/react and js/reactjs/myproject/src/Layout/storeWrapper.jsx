import React, { useState } from 'react';
import storeAPI from './API/storeAPI';
import { Link } from 'react-router-dom';

function StoreWrapper(props) {
    const [API, setAPI] = useState(storeAPI)
    console.log(API);
    return (
        <>
            <div className="container text-center store ">
                <div className="row mt-5 d-flex justify-content-center" style={{ paddingRight: "80px" }}>
                    {API.map((res) => {
                        return (
                            <>
                                <div className="col">
                                    <img src={res.autoimage} alt="" />
                                    <p className='title'>{res.title}</p>
                                    <p className='time'>{res.ByTime}</p>
                                </div>

                            </>
                        )
                    })}
                    <div className="box">
                        <div className="arrow">
                            <p className=''><Link to={"Francisco"}  class="fa-solid fa-arrow-right "></Link></p>
                            <p className='View'>Viewall</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoreWrapper;