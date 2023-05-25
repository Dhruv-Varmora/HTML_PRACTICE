import React, { useState } from 'react';
import PilotAPI from './API/pilotAPI';

function Autopilot(props) {
    const [API,setAPI] = useState(PilotAPI) 
    console.log(API);
    return (
        <div className="container autopilot mt-5 text-center">
            <h2>Auto-pilot for all your passwords</h2>
            <p>LastPass removes obstacles, letting you get back to the things you love most.</p>
            <div className="row p-5">
                {API.map((res)=>{
                    console.log(res);
                    return(
                        <div className="col-6 p-5">
                            <img src={res.autoimage} alt="" />
                            <h4>{res.title}</h4>
                            <p>{res.info}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    
    );
}

export default Autopilot;