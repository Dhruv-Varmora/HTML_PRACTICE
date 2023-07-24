import React from 'react';
import Navbar from './navbar';
import FranBanner from './franBanner';


function Francisco(props) {
    return (
        <>
            <Navbar />
           
            <div className="container">
                <h2 className='allstores'>All stores in San Francisco</h2>
                <div className='row'>
                    <div className="col d-flex">
                        <div className="img1">
                            <img src="img/banana.webp" alt="" />
                            <p>Grocery</p>
                        </div>
                        <div className="img1">
                        <img src="img/alcohol1.webp" alt="" />
                        <p>Alcohol</p>
                        </div>
                        <div className="img1">
                        <img src="img/wholesale1.webp" alt="" />
                        <p>Wholesale</p>
                        </div>
                        <div className="img1">
                        <img src="img/convenience1.webp" alt="" />
                        <p>Convenience</p>
                        </div>
                        <div className="img1">
                        <img src="img/pets1.webp" alt="" />
                        <p>Pets</p>
                        </div>
                        <div className="img1">
                        <img src="img/beauty1.webp" alt="" />
                        <p>Beauty</p>
                        </div>
                        <div className="img1">
                        <img src="img/electronics1.webp" alt="" />
                        <p>Electronics</p>
                        </div>
                        <div className="img1">
                        <img src="img/sports1.webp" alt="" />
                        <p>Sports gear</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col d-flex">
                        <button className='btn Fastest'><i class="fa-solid fa-bolt"></i> Fastest</button>
                        <button className='btn Fastest'>In-store prices</button>
                        <button className='btn Fastest'>EBT</button>
                        <button className='btn Fastest'>Pickup</button>
                        <button className='btn Fastest'>New</button>
                        
                    </div>
                </div>

                
            </div>
                <FranBanner/>
        </>

    );
}

export default Francisco;