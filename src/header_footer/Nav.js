import React from "react";
import './Nav_foter.css';
import { Link } from "react-router-dom";
import logo from '../images/illustration/logo.png'


function Nav (){



  return(
    <>

    <section className="overflow-x-hidden">
<div className="row">
  <div className="col-6 col-md-3 col-lg-2 p-0">
    <div className="bg-dark p-4 img-div">
      <img className="" alt="" src={logo} /> 
    </div>
  </div>
  <div className="col-6 col-md-9 col-lg-10">
    
    <div className="d-none d-lg-flex justify-content-between">
      <div className="bg d-flex  px-4 p-2">
      <ul className="list-unstyled d-flex nav-ul mb-0">
        <li><a href="mailto:needhelp@company.com" className="text-decoration-none "> <i className="fa-solid fa-envelope style pe-2" />needhelp@company.com</a></li>
        <li><a href="/" className="text-decoration-none "> <i class="fa-solid fa-location-pin style pe-2"/>88 Broklyn Golden Street. New York</a></li>
      </ul>
    
      <ul className="list-unstyled d-flex nav-ul mb-0">
        <li><Link to="/" className="text-decoration-none ">Help /</Link></li>
        <li><Link to="/" className="text-decoration-none ">Support /</Link></li>
        <li><Link to="/contact" className="text-decoration-none ">Contact</Link></li>
      </ul>
      </div>
      <ul className="list-unstyled d-flex nav-ul2 mb-0 p-2">
        <li><a href="/" className="text-decoration-none "><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="/" className="text-decoration-none "><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="/" className="text-decoration-none "><i class="fa-brands fa-pinterest-p"></i></a></li>
        <li><a href="/" className="text-decoration-none "><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
    </div>
    <div>
      <div className="row justify-content-between align-items-center">
  <nav className="navbar navbar-expand-lg col-lg-7 ">
  <div className="container-fluid justify-content-end">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 column">
        <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/services_list" className="nav-link" >Services</Link>
          </li>
        <li className="nav-item">
          <Link to="/news" className="nav-link">News</Link>
        </li>
        <li className="nav-item">
          <Link to="/about_us" className="nav-link" >About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link"  >Contact</Link>
        </li>
      </ul>
      <div>
     
        </div>
    </div>
  </div>
  </nav>
  <div className="col-lg-5 ">
  <ul className="d-flex align-items-center justify-content-end list-unstyled nav-ul mb-0" >
    <li><a href="#" className="text-reset"><i className="fa-solid fa-magnifying-glass fs-3"></i></a></li>
    <li className="d-none d-lg-flex"><Link to="contact" className="custom-btn btn-14 fw-bold ">GET SOLUTION</Link></li>
    </ul>  
  </div>
  </div>
    </div>
  </div>
</div>
    </section>
    
  
    </>
  )
}

export default Nav;