import React from "react";
import './section1.css';
import { Link } from "react-router-dom";
import about_1 from '../../images/illustration/about-1.jpg'
import about_2 from '../../images/illustration/about-2.jpg'
import img1 from '../../images/illustration/image-1.jpg'



function Section1(){
  return(
    <>
    <section className="container-fluid mb-5" id="about">

    <div className="row justify-content-around mt-4">
      <div className="col-12 col-md-6 col-lg-5 position-relative">
        <div className="d-flex gap">
          <div>
            <img className="img-fluid" src={about_1} alt=""/>
          </div>
          <div className="line2"></div>
        </div>
        <div className="pos2">
          <img className="img-fluid" src={about_2} alt=""/>
        </div>
        <div className="pos3 bg-white p-3 updown-animation">
          <figure className="d-flex align-items-center mb-0">
            <img src={img1} alt=""/>
            <figcaption className="mb-0 ps-3 ">
              <p className="style fs-3 fw-bold mb-0">3600+</p>
              <p className="mb-0">Satisfied Client</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div>
        <div className="d-flex mt-5 align-items-center w p-2 px-4">
    <div><p className="style mb-0 pe-3 fw-bold">ABOUT AUR COMPANY</p></div>
    <div className="line"></div>
          </div>
          <p className="fs-1 fw-bold">We Execute Our ideas From The Start to Finish</p>
          <p>Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</p>
          <div className="row">
            <div className=" col-12 col-lg-9 ">
              <figure className="d-flex ">
              <i class="fa-solid fa-rocket fs-1"></i>
              <figcaption className="ps-3">
                <h4>Manage Tech Services</h4>
                <p>We’ve designed a culture that allows our stewards to assimilate</p>
              </figcaption>
              </figure>
              <figure className="d-flex ">
              <i class="fa-solid fa-globe fs-1"></i>
              <figcaption className="ps-3">
                <h4>Internal Networking</h4>
                <p>We’ve designed a culture that allows our stewards to assimilate</p>
              </figcaption>
              </figure>
            </div>
            <div className="col-6 col-lg-3">
              <div className="high p-4">
                <h5 className="">High Quality IT Solutions for Startup</h5>
                <a href="#" className="text-decoration-none text-reset fw-bold">More.. <i class="fa-solid fa-arrow-right ps-2 style"></i></a>
              </div>
            </div>
          </div>
          <div className="py-2"><Link to="/about_us" className="custom-btn btn-14 fw-bold ">DISCOVER MORE</Link></div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Section1;