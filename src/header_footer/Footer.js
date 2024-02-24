import React from "react";
import './Nav_foter.css';
import { Link } from "react-router-dom";
import logo from '../images/illustration/logo.png'
import thumb_1 from '../images/illustration/project-thumb-1.jpg'
import thumb_2 from '../images/illustration/project-thumb-2.jpg'
import thumb_3 from '../images/illustration/project-thumb-3.jpg'
import thumb_4 from '../images/illustration/project-thumb-4.jpg'
import thumb_5 from '../images/illustration/project-thumb-5.jpg'
import thumb_6 from '../images/illustration/project-thumb-6.jpg'

function Footer() {
  return (
    <>
      <section className="bg-img4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="py-5">
                <div className="pb-2" >
                  <img src={logo} alt="" />
                </div>
                <p className="text-light">
                  Desires to obtain pain of itself, because it is pain, but occasionally circumstances.
                </p>
                <ul className="list-unstyled d-flex gap">
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="py-5">
                <h4 className="text-white pb-2">Explore</h4>
                <ul className="list-unstyled">
                  <li className="pb-2"><Link to="/about_us" className="text-decoration-none">About Company</Link></li>
                  <li className="pb-2"><a href="#team" className="text-decoration-none">Meat the Team</a></li>
                  <li className="pb-2"><Link to="/news" className="text-decoration-none">News & Media</Link></li>
                  <li className="pb-2"><a href="#project" className="text-decoration-none">Our Projects</a></li>
                  <li className="pb-2"><Link to="/contact" className="text-decoration-none">Contacts</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="py-5">
                <h4 className="text-white pb-2">Contacts</h4>
                <p className="text-light">66 Road Broklyn Street, 600 New York, USA</p>
                <ul className="list-unstyled">
                  <li className="pb-2"><a href="tel:+91-666 888 000" className="text-decoration-none "><i class="fa-solid fa-phone pe-3  fs-5"></i>666 888 000</a></li>
                  <li><a href="mailto:needhelp@company.com" className="text-decoration-none"><i class="fa-solid fa-envelope pe-3  fs-5"></i>needhelp@company.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="py-5">
              <h4 className="text-white pb-2">Gallery</h4>
              <div>
                <div className="d-flex gap pb-3">
                  <div><img className="img-fluid" src={thumb_1} alt=""/></div>
                  <div><img className="img-fluid" src={thumb_2} alt=""/></div>
                  <div><img className="img-fluid" src={thumb_3} alt=""/></div>
                </div>
                <div className="d-flex gap">
                  <div><img className="img-fluid" src={thumb_4} alt=""/></div>
                  <div><img className="img-fluid" src={thumb_5} alt=""/></div>
                  <div><img className="img-fluid" src={thumb_6} alt=""/></div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center p-5 copyright-div">
<p className="text-light fs-5 mb-0">
© Copyright 2022 Received
</p>
        </div>
      </section>
    </>
  )
}


export default Footer;