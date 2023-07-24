import React, { useState } from 'react';
import GroceryAPI from './API/GroceryAPI'
import { Link } from 'react-router-dom';

function Grocery(props) {
    const [Itam, setItam] = useState(GroceryAPI)
    console.log(Itam);
    return (
        <>
        <Link to={"Francisco"} className='groceryfran'>
            <div className="container-fluid">
                <div className="row mt-5 d-flex justify-content-center">

                    {Itam.map((res) => {
                       
                        return (
                            <>
                            
                                <div className="col-4 card ">
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='Gtitle'> {res.title}</p>
                                            <p className='Gtime'>{res.time}</p>
                                            <p className='Ginfo'>{res.info}</p>
                                            
                                        </div>
                                        <div className="col-6">
                                            <img src={res.autoimage} alt="" className='images' />
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })}

                </div>

            </div>
            </Link>
        </>
    );
}

export default Grocery;
