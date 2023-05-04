import React, { Component } from 'react';

class API extends Component {
    constructor()
    {
        super()
        console.log("contructor called");
        this.state={status:"pending..",data:''}
    }
    
    componentDidMount()
    {
        console.log("componentDidMount called");
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res)=>res.json())
            .then((Response)=>{
                console.log(Response);
                this.setState({status:"completed",data:Response})
            })
        }, 2000);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{this.state.status}</h1>
                            <div>{this.state.status=="completed"?<>{JSON.stringify(this.state.data)}</>:"no data found"}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default API;