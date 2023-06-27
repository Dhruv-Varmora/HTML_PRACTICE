import React, { useState } from 'react';
import { PostApiAction } from '../action/index';
import {useDispatch} from 'react-redux'

function Home(props) {
    const dispatch = useDispatch()
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [phone,setphone] = useState('')
    const [country,setcountry] = useState('')

    const NameHandl=(e)=>{
        setname(e.target.value)
    }
    const EmailHandl=(e)=>{
        setemail(e.target.value)
    }
    const PhoneHandl=(e)=>{
        setphone(e.target.value)
    }
    const CountryHandl=(e)=>{
        setcountry(e.target.value)
    }

    const Btnclck=(e)=>{
        const Resuldata={
            name:name,
            email:email,
            phone:phone,
            country:country,
        }
        dispatch(PostApiAction(Resuldata))
    }

    return (
        <>
          <div className="container">
            <table>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" id='name' className='form-control' onChange={(e)=>NameHandl(e)} /></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" id='email' className='form-control' onChange={(e)=>EmailHandl(e)} /></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td><input type="text" id='phone' className='form-control' onChange={(e)=>PhoneHandl(e)} /></td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td><input type="text" id='country' className='form-control' onChange={(e)=>CountryHandl(e)} /></td>
                </tr>
                <button className='btn btn-primary' onClick={(e)=>Btnclck(e)}>submit</button>
                
            </table>
            </div>  
        </>
    );
}

export default Home;