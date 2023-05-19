import React, { useEffect, useState } from 'react';

function UseEffect(props) {
    const[name,setName]=useState("VD")

    const BtnClck=()=>{
        console.log("btn called");
        setName("Varmora Dhruv")
    }

    useEffect(()=>{
        setTimeout(()=>{
            console.log("useEffect called");
        }, 2000)       
    })
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("counter useffect called");
        console.log(document.title=`you have clicked ${count} times`);
    })

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{name}</h1>
                        <button onClick={BtnClck} className='btn btn-primary'>Click</button>
                        <br /> <br />
                        <button className='btn btn-success' onClick={()=>{setCount(count+1)}}>you have Clicked {count} times</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default UseEffect;