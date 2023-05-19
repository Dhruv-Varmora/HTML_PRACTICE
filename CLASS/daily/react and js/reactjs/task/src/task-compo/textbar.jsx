import React, { useState } from 'react';

function Textbar(props) {
    const[text,setText]=useState("");

    // const handlechange = (e) => {
    //     setText(e.target.value);
    // }

    // const handLower = () =>{
    //     setText(text.toLowerCase());
    // }
    const handuper = () =>{
        setText(text.toUpperCase());
    } 
    


    return (
        <>
          <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <textarea name="text" id="mybox" value={text}  cols="100" rows="10" onChange={(e)=>{setText(e.target.value)}}></textarea>
                </div>
            </div>
            <button className='btn btn-primary mt-3 mb-3' onClick={()=>{setText(text.toLowerCase())}}>Lowercase</button>
            <button className='btn btn-primary mt-3 ms-3 mb-3' onClick={handuper}>upercase</button>
            <p>{text.split(" ").length} word {text.length} charachter</p>
    
            </div>  
        </>
    );
}

export default Textbar;

