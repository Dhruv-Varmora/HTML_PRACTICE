import React from 'react';
import {useState} from 'react';


function UseState(props) {
    const[name,setName]=useState('VD')
    const[vara,setvara]=useState(10)
    const[varb,setvarb]=useState(0)
    const[count,setCount]=useState(0)
    const[liked,setliked]=useState(true)
    const[Text,setText]=useState();

    const Btnclck = () => {
        setName("Varmora Dhruv")
    }

    const handleChange=(e)=>{
        setliked(e.target.checked);
    }
    const Show = (Event)=>{
        setText(Event.target.value)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{name}</h1>
                        <button className='btn btn-primary' onClick={Btnclck}>click</button>
                        <h1>{vara+varb}</h1>
                        <button className='btn btn-success' onClick={()=>{
                            setvara(10)
                            setvarb(11)
                        }}>click</button>
                        <br /> <br /><br /><br /><br />
                        <button className='btn btn-info' onClick={()=>setCount(count+1)}>You pressed me {count} times</button>
                        <br /><br /><br />
                        <input type="checkbox" checked={liked} onChange={handleChange}/>I Like Thisk
                        <p>you {liked?'liked':'did not like'}this.</p>

                        <br /><br />
                        <input type="text" value={Text} onChange={Show}/>
                        <h2>{Text}</h2>


                    </div>
                </div>
            </div>
        </>
    );
}

export default UseState;