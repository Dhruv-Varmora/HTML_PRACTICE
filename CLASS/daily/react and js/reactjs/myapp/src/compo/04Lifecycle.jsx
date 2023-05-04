import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state={counter:0}
    }

    // componentWillMount() {
    //     console.log("componentWillMount called");
    // }

    componentDidMount() {
        setTimeout(() => {
            console.log("componentDidMount called");
        },2000);
        
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps called");
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        console.log("nextState");
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate called");
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called");
        console.log("prevState");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }
    Btnclck=()=>{
        console.log("Btn called");
        this.setState({counter:this.state.counter+1})
    }

    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{this.state.counter}</h1>
                        <button className='btn-primary' onClick={this.Btnclck}>click me</button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}



export default Lifecycle;