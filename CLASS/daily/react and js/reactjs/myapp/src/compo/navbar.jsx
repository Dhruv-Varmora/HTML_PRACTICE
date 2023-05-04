import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './01Home'
import About from './02About';
import State from './03state';
import Lifecycle from './04Lifecycle';
import Loops from './05loops';
import API from './06API';
import Compo from './07Compo';
import UseState from './funccompo/01useState';


function navbar(props) {
    const data = { '/home': 'Home', '/about': 'About', '/state': 'state', '/lifecycle': 'Lifecycle','/loops':'Loops','/API':'API','/Compo':'Compo','/useState':'UseState' }
    const returndata = Object.entries(data).map((res) => {
        console.log(res);
        return <li className="nav-item">
            <Link className="nav-link" to={res[0]}>{res[1]}</Link>
        </li>
    })
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Logo</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                {returndata}
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/state' element={<State />} />
                    <Route path='/Lifecycle' element={<Lifecycle />} />
                    <Route path='/loops' element={<Loops/>} />
                    <Route path='/API' element={<API/>}/>
                    <Route path='/compo' element={<Compo/>}/>
                    <Route path='/useState' element={<UseState/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default navbar;