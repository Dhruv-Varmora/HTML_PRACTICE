import React, { useState } from 'react';
import { useMemo } from 'react';



function UseMemo(props) {
    const[count,setcount]=useState(0)

    const Btnclck=()=>{
        setcount((c)=>c+1)
    }
    // const Btnclck=()=>{
    //     setcount((c)=>c+1)
    // }
    const inc = useMemo(()=>Increment(count))
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h1>{count}</h1>
                    <button className='btn btn-primary' onClick={Btnclck}>click me</button>    
                    </div>  
                </div>
            </div>  
        </>
    );
}

const Increment=(newcount)=>{
    for(let i=0;i<50;i++)
    {
        newcount+=1
    }
    return newcount;
}

export default UseMemo;