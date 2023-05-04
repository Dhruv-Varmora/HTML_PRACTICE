import React, { Component } from 'react';

class taskAPI extends Component {
    constructor() {
        super()
        console.log("contructor called");
        this.state = { status: "pending..", data: '' 
    }
    }
    componentDidMount() {
        console.log("componentDidMount called");
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then((res) => res.json())
                .then((Response) => {
                    console.log(Response);
                    this.setState({ status:"completed",data:Response})
                  let output=''
                    this.state.data.forEach(element => {
                        output+= `
                    <tr>
                    <td>${element.postId}</td>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    </tr>
                    `
                    });
                    document.getElementById('display').innerHTML=output;
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
                            <table className='border text-center table-striped'>
                                <tr>
                                    <th>ID</th>
                                    <th>postId</th>
                                    <th>name</th>
                                    <th>email</th>
                                </tr>
                                <tbody id='display'></tbody>
                            </table>
                            {/* {this.state.status=="completed" ? <div>{JSON.stringify(this.state.data)}</div> : "no data found"} */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default taskAPI;