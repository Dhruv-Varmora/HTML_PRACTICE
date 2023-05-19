import React from 'react';
import { useRef } from 'react';


function UseRef(props) {
    // let myref = useRef (null)
    const myref = useRef(null)
    console.log(myref.current);
    const inputclck=()=>{
        myref.current.focus();
        if(!myref.current.value)
        {
            alert("please enter data")
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <input type="text" ref={myref} />
                        <button className='btn btn-primary' onClick={inputclck}>click me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseRef;