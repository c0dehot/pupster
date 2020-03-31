import React from 'react';
import { Link, useLocation } from "react-router-dom";

/* activePage  | changePage-call-back */
function NavBar() {
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Pupster</Link>
      {/* <a class="navbar-brand" href="#" onClick={ function(){ props.changePage('AboutPage')} }>Pupster</a> */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
            </Link>
          </li>          
          <li className="nav-item">
            <Link to="/discover" className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
              Discover
            </Link>
          </li> 
          <li className="nav-item">
            <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
              Search
            </Link>
          </li>  
          <li className="nav-item">
            <Link to="/settings" className={location.pathname === "/settings" ? "nav-link active" : "nav-link"}>
              Settings
            </Link>
          </li>                   
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;