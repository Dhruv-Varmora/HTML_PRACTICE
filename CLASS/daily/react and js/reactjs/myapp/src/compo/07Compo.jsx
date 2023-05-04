import React, { Component } from 'react';
import Reusablecompo from './ReusableCompo';

class Compo extends Component {
    render() {
        return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <Reusablecompo imgsrc="img/Black.jpg"
                        oldprice="$500" newprice="$400" title="black"/>
                    </div>
                    <div className="col-3">
                        <Reusablecompo imgsrc="img/blue.webp"
                        oldprice="$500" newprice="$400" title="blue"/>
                    </div>
                    <div className="col-3">
                        <Reusablecompo imgsrc="img/polo.jpeg"
                        oldprice="$500" newprice="$400" title="polo"/>
                    </div>
                    <div className="col-3">
                        <Reusablecompo imgsrc="img/yellow.jpg"
                        oldprice="$500" newprice="$400" title="yellow"/>
                    </div>
                    <div className="col-3 mt-5">
                        <Reusablecompo imgsrc="img/yellow.jpg"
                        oldprice="$500" newprice="$400" title="yellow"/>
                    </div>
                    <div className="col-3 mt-5">
                        <Reusablecompo imgsrc="img/yellow.jpg"
                        oldprice="$500" newprice="$400" title="yellow"/>
                    </div>
                    <div className="col-3 mt-5">
                        <Reusablecompo imgsrc="img/yellow.jpg"
                        oldprice="$500" newprice="$400" title="yellow"/>
                    </div>
                    <div className="col-3 mt-5">
                        <Reusablecompo imgsrc="img/yellow.jpg"
                        oldprice="$500" newprice="$400" title="yellow"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Compo;