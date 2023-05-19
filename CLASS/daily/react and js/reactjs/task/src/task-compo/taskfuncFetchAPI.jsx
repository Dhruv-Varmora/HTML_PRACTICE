import React, { useEffect, useState } from 'react';

function TaskfuncFetchAPI(props) {
    const[data,setdata]=useState({})
    const[status,setStatus]=useState('pending...')

    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((Response)=>{
                console.log(Response);
                setStatus('completed')
                setdata(Response)
            }).catch((Error)=>{
                console.log(Error);
            })
        }, 3000)
    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{status}</h1>
                        <div>{status==="completed"?JSON.stringify(data):"no data found"}</div>
                    </div>
                </div>    
            </div>         
        </div>
    );
}

export default TaskfuncFetchAPI;