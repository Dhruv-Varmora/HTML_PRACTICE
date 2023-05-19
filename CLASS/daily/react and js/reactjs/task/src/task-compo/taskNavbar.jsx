import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GujratiThali from "./gujratiThali";
import PanjabiThLI from "./panjabiThLI";
import SouthinsdianThail from "./southinsdianThail";
import TaskAPI from "./taskAPI";
import TaskFuncuseState from "./taskfuncuseState";
import Textbar from "./textbar";
import TaskfuncFetchAPI from "./taskfuncFetchAPI";
import FormValidation from "./formValidation";
function TaskNavbar(props) {
  const data = { "/GujratiThali": "GujratiThali", "/panjabiThLI": "PanjabiThLI",
   "/southinsdianThail": "SouthinsdianThail","/taskAPI":"TaskAPI",'/taskfuncuseState':'TaskFuncuseState','/textbar':'Textbar',
  '/taskfuncFetchAPI':'TaskfuncFetchAPI','/formValidation':'FormValidation'};
  const returndata = Object.entries(data).map((res) => {
    console.log(res);
    return (
      <li className="nav-item">
        <Link className="nav-link" to={res[0]}>
          {res[1]}
        </Link>
      </li>
    );
  });
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fiuid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">{returndata}</ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/GujratiThali" element={<GujratiThali />} />
          <Route path="/panjabiThLI" element={<PanjabiThLI />} />
          <Route path="/southinsdianThail" element={<SouthinsdianThail />} />
          <Route path="/TaskAPI" element={<TaskAPI/>}/>
          <Route path="/taskfuncuseState" element={<TaskFuncuseState/>}/>
          <Route path="/textbar" element={<Textbar/>}/>
          <Route path="/taskfuncFetchAPI" element={<TaskfuncFetchAPI/>}/>
          <Route path="/formValidation" element={<FormValidation/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default TaskNavbar;
