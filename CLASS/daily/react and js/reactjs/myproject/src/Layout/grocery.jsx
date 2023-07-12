import React, { useState } from 'react';
import GroceryAPI from './API/GroceryAPI'

function Grocery(props) {
    const [Itam, setItam] = useState(GroceryAPI)
    console.log(Itam);
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5 d-flex justify-content-center">
                    {Itam.map((res) => {
                        return (
                            <>
                                <div className="col-4 card ">
                                    <div className='row'>
                                        <div className="col-6">
                                            <p className='Gtitle'>{res.title}</p>
                                            <p className='Gtime'>{res.time}</p>
                                            <p className='Ginfo'>{res.info}</p>
                                            <div></div>
                                        </div>
                                        <div className="col-6">
                                            <img src={res.autoimage} alt="" className='images' />
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })}

                    <div className='Showmore mt-3'>
                        <button>Show more <i class="fa-solid fa-chevron-down"></i></button>
                    </div>
                   

                </div>

            </div>
        </>
    );
}

export default Grocery;
