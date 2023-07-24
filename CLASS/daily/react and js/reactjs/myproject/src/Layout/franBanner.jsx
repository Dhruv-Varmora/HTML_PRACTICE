import React, { useState } from 'react';
import franciscoAPI from './API/franciscoAPI';

function FranBanner(props) {
    const [Banner, setBanner] = useState(franciscoAPI)
    console.log(Banner);
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5 d-flex justify-content-center" >
                    {Banner.map((res)=>{
                        return(
                            <>
                                <div className="col-4 cardbanner">
                                <div className="row">
                                    <div className='col-3 bannerimg'>
                                    <img src={res.autoimage} alt="" className='images' />
                                    </div>
                                    <div className='col-9'>
                                            <p className='Gtitle1'>{res.title}</p>
                                            <p className='Ginfo1'>{res.info}</p>
                                            <p className='Gtime1'>{res.time}</p>
                                    </div>
                                </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default FranBanner;