import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo,DeleteTodo } from '../action/index';
function ToDoApp(props) {
    const[inputdata,setInputdata]=useState('')
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.listdata.list)
    console.log(list);

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <input type="text" className='form-control' value=
                        {inputdata} onChange={(e)=>setInputdata(e.target.value)}/>
                        <br />
                        <button className='btn btn-primary' on onClick=
                        {()=>dispatch(AddTodo(inputdata),setInputdata(''))}>Add task</button>
                        {list.map((res)=>{
                            console.log(res);
                            return(
                                <div className='d-flex'>
                                    <h1>{res.data}</h1>
                                    <br /><br />
                                    <button className='btn btn-danger mt-3' onClick={()=>dispatch(DeleteTodo(res.id))}>Delete</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDoApp;