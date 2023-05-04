import React, { Component } from 'react';

class Reusablecompo extends Component {
    render() {
        return (
            <div>
                <div className="card text-center">
                    <img src={this.props.imgsrc} alt="black" />
                    <h5>{this.props.title}</h5>
                    <div className="d-flex">
                        <span className='ms-3'>old price:$ <del>{this.props.oldprice}</del></span>
                        
                        <span className='ms-2'>new price:$ {this.props.newprice}</span>
                    </div>
                    <center><button className="btn btn-primary w-50">Buy Now</button></center>
                </div>
            </div>
        );
    }
}

export default Reusablecompo;