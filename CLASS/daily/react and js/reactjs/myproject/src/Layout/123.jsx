import React from 'react';

function Navbar(props) {
    return (
        <div className="container-fluid">
            <div className="navigation d-flex justify-content-between p-3">
                <div className="bar">

                    
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fa-solid fa-bars"></i>
                    </button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                <div className="modal-header">
                          
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        <img src="img/logo.jpg" alt="logo" />
                                    </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> <br />
                                </div>  
                                <div className='searchline'>
                                    <div className='input'>
                                        <input name='search' placeholder='Search' type='text'></input>
                                    </div>
                                    <div className='fa-solid'>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                                <div className='textbox'>
                                    <ul className='three d-flex'>
                                        <li class="menu"><a href="">Explore</a></li>
                                        <li class="menu"><a href="">Upload</a></li>
                                        <li class="menu"><a href="">FAQ</a></li>
                                    </ul>
                                    <div className='browseby'>
                                        <span className=''><b>Browse by</b></span>
                                        <div className='name d-flex'>
                                                <ul className='six'>
                                                    <li class="menu"><a href="">Books</a></li>
                                                    <li class="menu"><a href="">Magazines</a></li>
                                                    <li class="menu"><a href="">Document</a></li>
                                                </ul>
                                                <ul className='six'>
                                                    <li class="menu"><a href="">Audiobooks</a></li>
                                                    <li class="menu"><a href="">Podcasts</a></li>
                                                    <li class="menu"><a href="">Sheet music</a></li>
                                                </ul>
                                        </div>   
                                    </div>
                                    <div className='interests'>
                                        <span className=''><b>Interests</b></span>
                                        <ul className='ten'>
                                            <li class="menu"><a href="">Career&Growth</a></li>
                                            <li class="menu"><a href="">Business</a></li>
                                            <li class="menu"><a href="">Finance&Money Management</a></li>
                                            <li class="menu"><a href="">Politics</a></li>
                                            <li class="menu"><a href="">Sports&Recreation</a></li>
                                            <li class="menu"><a href="">Games&Activities</a></li>
                                            <li class="menu"><a href="">Comics&Graphic Novels</a></li>
                                            <li class="menu"><a href="">Social Science</a></li>
                                            <li class="menu"><a href="">True Crime</a></li>
                                            <li class="menu"><a href="">Travel</a></li>
                                        </ul>

                                    </div>
                                </div>  

                                <div className='download'>
                                    <p className='taxt'>Download our app to read books on any device</p>
                                    <img src='img/appstore.png'></img>
                                    <img src='img/playstore.png'></img>
                                    <img src='img/kindle.png'></img>
                                </div>
                                <div className='fontosm'>
                                    <ul className='icon d-flex'>
                                        <li class=""><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                                        <li class=""><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                                        <li class=""><a href=""><i class="fa-brands fa-scribd"></i></a></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                <div className="logo">
                    <a><img src="img/logo.jpg" alt="logo" /></a>
                </div>
                <div className="Signinbtn">
                    <button className="btn"><b>Sign in</b></button>
                </div>

            </div>
        </div>
    );
}

export default Navbar;