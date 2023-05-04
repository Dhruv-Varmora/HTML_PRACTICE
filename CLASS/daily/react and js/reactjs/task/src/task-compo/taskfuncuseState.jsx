import React from 'react';
import { useState } from 'react';


function FuncuseState(props) {
   const[Text,setText]=useState();

    const Show = (Event)=>{
        setText(Event.target.value)
    }
    return (
        <div className='container'> 
            <div className="row mt-5" >
                <div className="col">
                    <input type="text" value={Text} onChange={Show}/>
                    <h1>{Text}</h1>
                </div>
            </div>
        </div>
    );
}

export default FuncuseState;