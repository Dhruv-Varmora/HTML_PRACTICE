import { useEffect, useState } from 'react';
import {GetApiDetails,DeleteApiDetails, PostAPIDetails, EditApiDetails, UpdateApiDetails} from '../crud/API';

export const GetApiAction=()=>{
    return function (dispatch)
    {
        return GetApiDetails().then((res)=>{
            console.log(res);
            dispatch({
                type:'GET_DETAILS',
                payload:res.data
            })
        })
    }
}



export const DeleteApiAction=(id)=>{
    return function (dispatch)
    {
        return DeleteApiDetails(id).then((res)=>{
            console.log(res);
            dispatch({
                type:'DELETE_DETAILS',
                payload:true
            })
        })
    }
}

//add data
export const PostApiAction=(request)=>{
    return function (dispatch)
    {
        return PostAPIDetails(request).then((res)=>{
            console.log(res,"reponse from postdata");
            dispatch({
                type:'POST_DETAILS',
                payload:res.data
            })
        })
    }
}

// edit data

export default(props)=>{
    const[detailsbyid,setdetailsbyID] = useState({})
    const GetDetailsbyID = (requestid)=>{
        console.log("edit data",requestid);
        return EditApiDetails(requestid).then((res)=>{
            console.log(res);
            setdetailsbyID(res)
        })

    }
    useEffect(()=>{
        GetDetailsbyID(props)

    },[])
    return[detailsbyid]
}

//update data

export const UpdateApiAction=(request,id)=>{
    return function (dispatch)
    {
        dispatch({
            type:'UPDATE_DETAILS',
            payload:false
        })
        return UpdateApiDetails(request,id).then((res)=>{
            console.log(res,"reponse from update data");
            dispatch({
                type:'UPDATE_DETAILS',
                payload:true
            })
        })
    }
}