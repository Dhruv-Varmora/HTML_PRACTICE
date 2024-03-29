import React from 'react';
import { Link } from 'react-router-dom';

function Stores(props) {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className='' >
                        <p className='fs-2 fw-bold text-center'>Stores to help you save</p>
                        <p className='text-end view'><Link to={"Francisco"}>view all <i class="fa-solid fa-arrow-right"></i></Link></p>
                    </div>

                    <div className="col-4 card1">
                        <div className='Walmart'>
                            <div className='imgstore'>
                                <img src="img/store7.webp" alt="" />
                            </div>
                            <div className='instore'>
                                <p className='prices1'>Walmart</p>
                                <p className='prices2'>In-store prices</p>
                                <span className='angle'><i class='fas fa-angle-right'></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 card1">
                        <div className="Walmart">
                            <div className='imgstore'>
                                <img src="img/store11.webp" alt="" />
                            </div>
                            <div className='instore'>
                                <p className='prices1'>Sprouts Farmers Market</p>
                                <p className='prices2'>In-store prices . By 10:00am</p>
                                <span className='angle'><i class='fas fa-angle-right'></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 card1">
                        <div className="Walmart">
                        <div className='imgstore'>
                            <img src="img/store12.webp" alt="" />
                        </div>
                        <div className='instore'>
                            <p className='prices1'>Kohl's</p>
                            <p className='prices2'>In-store prices</p>
                            <span className='angle'><i class='fas fa-angle-right'></i></span>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 card1">
                        <div className="Walmart">
                        <div className='imgstore'>
                            <img src="img/store13.webp" alt="" />
                        </div>
                        <div className='instore'>
                            <p className='prices1'>Sports Basement</p>
                            <p className='prices2'>In-store prices . By 1:45pm</p>
                            <span className='angle'><i class='fas fa-angle-right'></i></span>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 card1">
                        <div className="Walmart">
                        <div className='imgstore'>
                            <img src="img/store4.webp" alt="" />
                        </div>
                        <div className='instore'>
                            <p className='prices1'>Rainbow Grocery</p>
                            <p className='prices2'>In-store prices . By 11:45am</p>
                            <span className='angle'><i class='fas fa-angle-right'></i></span>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 card1">
                        <div className="Walmart">
                            <div className='imgstore'>
                                <img src="img/store5.webp" alt="" />
                            </div>
                            <div className='instore'>
                                <p className='prices1'>Walgreens</p>
                                <p className='prices2'>In-store prices 1 hr</p>
                                <span className='angle'><i class='fas fa-angle-right'></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stores;