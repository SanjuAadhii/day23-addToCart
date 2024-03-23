import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"

function Navbar({cart}) {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#"></a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link ">Products</a>
      </li>
    </ul>
    <form className="form-inline ms-auto m-2">
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}

     
      <button className="btn btn-outline-success " type="submit">Add to Card<div>{cart}</div></button>

    </form>
  </div>
</nav>
  );
}

export default Navbar;
