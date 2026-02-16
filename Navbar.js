import React from "react";
import {Link} from "react-router-dom";
import"./Navbar.css";

const Navbar=()=>{
    return(

        <body className="Body">
        <nav className="navbar">
        <div className="navbar-logo"> <h1> <span className="bg-primary text-dark rounded">M.D</span> <sapn className="bg-primary rounded text-dark">N</sapn><span className="text-primary">asrif</span></h1> </div>
    
        <ul className="navbar-links">
         <li className="Home ">  <Link to="/"  >Home</Link></li>
          <li  className="About text-primary">  <Link to="/About"  > About</Link> </li>  
          <li className="Work text-primary">   <Link to="/Work"  > Work</Link> </li>
          <li className=" Contact text-primary">   <Link to="/Contact"  >Contact</Link> </li>
        </ul>
        

        
        <button className="btn btn-outline-primary">LET.S TALK</button>
        </nav>
        
        </body>
    );
}




export default Navbar;



