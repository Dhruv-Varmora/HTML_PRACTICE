import React from 'react';

function Plan(props) {
    return (
       <>
        <div className="conatiner  mt-5 plan">
            <h1 className='text-center'>Choose a plan that works for you</h1>
            <div className="btns text-center">
                <button className='single'>Single Users & Families</button>
                <button className='bus'>Business</button>
            </div>
            <div className="tbls d-flex justify-content-center m-5">
                <div className="tbl1 mx-5">
                    <div className="card p-5">
                        <h2><b>Free</b></h2>
                        <p>Reliable, secure, easy-to-use password management for 1 device type.</p>
                        <hr style={{color:"red",width:"30px",height:"5px"}}/>
                        <h1>$0</h1>
                        <button className='get'>Get Started for free</button>
                        <span className='mt-3'>Includes 30-day trial of Premium</span>
                        <hr />
                        <ul>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                        </ul>
                    </div>
                </div>
                <div className="tbl2">
                <div className="card p-5">
                        <h2><b>Free</b></h2>
                        <p>Reliable, secure, easy-to-use password management for 1 device type.</p>
                        <hr style={{color:"red",width:"30px",height:"5px"}}/>
                        <h1>$0</h1>
                        <button  className='get'>Get Started for free</button>
                        <span className='mt-3'>Includes 30-day trial of Premium</span>
                        <hr />
                        <ul>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                        </ul>
                    </div>
                </div>
                <div className="tbl1 mx-5">
                    <div className="card p-5">
                        <h2><b>Free</b></h2>
                        <p>Reliable, secure, easy-to-use password management for 1 device type.</p>
                        <hr style={{color:"red",width:"30px",height:"5px"}}/>
                        <h1>$0</h1>
                        <button className='get'>Get Started for free</button>
                        <span className='mt-3'>Includes 30-day trial of Premium</span>
                        <hr />
                        <ul>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                            <li>Unlimited passwords</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default Plan;