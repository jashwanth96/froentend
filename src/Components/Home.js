import React from "react";
// import {  setstatus } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import img from './images/aboutimg.jpg'

function Home(){
    return(
<div>
{/* {status === "home" ? ( */}
  <div id="home" >
    {/* <img id="homeimg" alt="" src={homeimg} /> */}
    <div id="hometext" className="hometext">
      <h1>Find a Job</h1>
    <div id="input">
      <input type="text" placeholder="Role" />
      <input type="text" placeholder="Location" />
    </div>
    <div id="btn">
    <button><FontAwesomeIcon icon={faSearch} /> Search</button>
    </div>
    </div>
  </div>
  <div>
    <h2><b>Leatest Enrolled</b></h2>
    <div class="card">
    <img src={img} alt="Avatar" />
    <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
  </div>
</div>
  </div>
      <footer>
        <div id="footer">
          <p>@2023 Job Portal</p>
        </div>
      </footer>
</div>
);
}
export default Home;