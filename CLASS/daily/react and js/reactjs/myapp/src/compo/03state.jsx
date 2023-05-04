import React, { Component } from 'react';

class state extends Component {
    constructor()
    {
        super()
        this.state={name:"Tops",age:15,author:"chetan bhagat",movie:"3 idiots"}
    }
    
    btnclck=()=>{
        console.log("btn called");
        this.setState({name:"Tops technologies",age:17})
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{this.state.name}</h1>
                        <h1>{this.state.age}</h1>
                        <button className='btn btn-primary' onClick={this.btnclck}>Click</button>
                        <h1>{this.state.movie} : {this.state.author}</h1>
                        <button className='btn btn-success' onClick={()=>this.setState({author:"chetan patel",movie:"2 states"})}>Click</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default state;