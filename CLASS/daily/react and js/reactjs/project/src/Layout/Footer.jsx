import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <>
           <div className="container-fluid bg-dark text-white p-5 mt-5">
            <div className="icons">
                <p>follow us on:
                    <span className='mx-2'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-youtube"></i>
                    </span>
                </p>
            </div>
            <hr />
            <div className="row pass">
                <div className="col-2">
                    <ul>
                        <h5>LASTPASS</h5>
                        <li><a href="/">Homepage</a></li>
                        <li><Link to={"/business"}>Business</Link></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">How it Works</a></li>
                        <li><a href="/">Families</a></li>
                        <li><a href="/">Premium vs Free</a></li>

                    </ul>
                </div>
                <div className="col-2">
                    <ul>
                        <h5>LASTPASS</h5>
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/">Download</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">How it Works</a></li>
                        <li><a href="/">Families</a></li>
                        <li><a href="/">Premium vs Free</a></li>

                    </ul>
                </div>
                <div className="col-2">
                    <ul>
                        <h5>LASTPASS</h5>
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/">Download</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">How it Works</a></li>
                        <li><a href="/">Families</a></li>
                        <li><a href="/">Premium vs Free</a></li>

                    </ul>
                </div>
                <div className="col-2">
                    <ul>
                        <h5>LASTPASS</h5>
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/">Download</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">How it Works</a></li>
                        <li><a href="/">Families</a></li>
                        <li><a href="/">Premium vs Free</a></li>

                    </ul>
                </div>
                <div className="col-2">
                    <ul>
                        <h5>LASTPASS</h5>
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/">Download</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">How it Works</a></li>
                        <li><a href="/">Families</a></li>
                        <li><a href="/">Premium vs Free</a></li>

                    </ul>
                </div>
                <div className="col-2">
                    <ul>
                        <h5>LASTPASS</h5>
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/">Download</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">How it Works</a></li>
                        <li><a href="/">Families</a></li>
                        <li><a href="/">Premium vs Free</a></li>

                    </ul>
                </div>
            </div>
            <hr/>
            <div className="d-flex justify-content-between">
                <div className="slct">
                    <select name="" id="" className='mysclt'>
                        <option value="">English</option>
                        <option value="">English</option>
                        <option value="">English</option>
                        <option value="">English</option>
                        <option value="">English</option>
                    </select>
                </div>
                <div>
                    <span>© 2023 LastPass US LP. All rights reserved by Dhruv Varmora.</span>
                </div>
            </div>
            </div> 
        </>
    );
}

export default Footer;