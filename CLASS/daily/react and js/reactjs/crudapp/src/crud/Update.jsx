import React, { useEffect, useState } from 'react';
import { PostApiAction, UpdateApiAction } from '../action/index';
import {useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import GetDetailsID from '../action/index'

function Update(props) {
    const dispatch = useDispatch()
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [phone,setphone] = useState('')
    const [country,setcountry] = useState('')

    const {id}= useParams()
    console.log("get edit id",id);
    const[mydata]=GetDetailsID(id)
    useEffect(()=>{
        const data=()=>{
            if(mydata.data)
            {
                setname(mydata.data.name)
                setemail(mydata.data.email)
                setphone(mydata.data.phone)
                setcountry(mydata.data.country)
            }
        }
        data();
    },[mydata.data])

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
        e.preventDefault();
        const Resuldata={
            name:name,
            email:email,
            phone:phone,
            country:country
        }
        dispatch(UpdateApiAction(Resuldata,id))
        // console.log(Resuldata);
    }


    
    

    return (
        <>
          <div className="container">
            <table className='table'>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" id='name' className='form-control' onChange={(e)=>NameHandl(e)} defaultValue={name}/></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" id='email' className='form-control' onChange={(e)=>EmailHandl(e)} defaultValue={email}/></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td><input type="text" id='phone' className='form-control' onChange={(e)=>PhoneHandl(e)} defaultValue={phone}/></td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td><input type="text" id='country' className='form-control' onChange={(e)=>CountryHandl(e)} defaultValue={country}/></td>
                </tr>
                <button className='btn btn-primary' onClick={(e)=>Btnclck(e)}>update</button>
            </table>
            </div>  
        </>
    );
}

export default Update;