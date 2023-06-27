import axios from "axios";

export async function AxiosReqest(url,method,headers,params)
{
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params

    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{}
    })
}

//get data

const GetApiDetails = () =>{
    const headers={
        'Content-type':'application/json'
    }
    return AxiosReqest('http://localhost:3000/details','GET',headers,
    {})
}

//delete data

const DeleteApiDetails = (id) =>{
    const headers={
        'Content-type':'application/json'
    }
    return AxiosReqest('http://localhost:3000/details/'+id,'delete',headers,
    {})
}

//add data
const PostAPIDetails=(data)=>{
    return axios.post('http://localhost:3000/details',data)
}

//delete data

const EditApiDetails = (id) =>{
    const headers={
        'Content-type':'application/json'
    }
    return AxiosReqest('http://localhost:3000/details/'+id,'GET',headers,{})
}

//update data

const UpdateApiDetails = (data,id) =>{
    const headers={
        'Content-type':'application/json'
    }
    return AxiosReqest('http://localhost:3000/details/'+id,'PUT',headers,data)
}

export {GetApiDetails,DeleteApiDetails,PostAPIDetails,EditApiDetails,UpdateApiDetails};