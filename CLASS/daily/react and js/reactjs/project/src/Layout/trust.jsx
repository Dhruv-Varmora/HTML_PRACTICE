import React, { useState } from 'react';
import TrustAPI from './API/TrustAPI';

function Trust(props) {
    const [API, setAPI] = useState(TrustAPI)
    console.log(API);
    return (
        <>
            <div className='container text-center trust'>
                <h2><b>Trusted by millions, recognized by experts</b></h2>

                <div className='row mt-3 d-flex justify-content-center'>
                    {API.map((res) => {
                        return (
                            <>
                                <div className='col-4'>
                                    <h3>{res.txt}</h3>
                                    <img src={res.image} alt="" />
                                    <p>{res.info}</p>
                                    <p>{res.spn}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Trust;