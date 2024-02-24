import React from "react";
import { Link } from "react-router-dom";
import service_1 from '../../images/illustration/service-1.jpg'
import service_2 from '../../images/illustration/service-2.jpg'
import service_3 from '../../images/illustration/service-3.jpg'


function Section2(){
  return(
    <>
    <section className="container-fluid mt-5">
<div className="text-center">
<div className="d-flex align-items-center p-2 px-4 justify-content-center">
    <div><p className="style mb-0 pe-3 fw-bold">SERVICES WE’RE OFFERING</p></div>
    <div className="line"></div>
          </div>
          <h1 className="fw-bold">High quality products and services that we stand behind</h1>
</div>

<div>
  <div className="row justify-content-evenly mt-5">
<div className="col-12 col-md-6 col-lg-3">
  <figure className="position-relative border border-2 rounded border-black">
    {/* <div className="scale"> */}
    <div>
    <img className="img-fluid width" src={service_1} alt=""/>
    {/* </div> */}
    </div>
    <figcaption className="p-4">
<h5>Product Development</h5>
<p>We’ve designed a culture that allows our stewards to assimilate</p>
<Link to="/services_details" className="text-decoration-none text-reset fw-bold">Read More <i class="fa-solid fa-arrow-right ps-2 style"></i></Link>
    </figcaption>
    <div className="pos4 p-2">
    <i class="fa-brands fa-connectdevelop fs-1"></i>
    </div>
  </figure>
</div>
<div className="col-12 col-md-6 col-lg-3">
<figure className="position-relative border border-2 rounded border-black">
    {/* <div className="scale"> */}
    <img className="img-fluid width" src={service_2} alt=""/>
    {/* </div> */}
    <figcaption className="p-4">
<h5>UI/UX Designing</h5>
<p>We’ve designed a culture that allows our stewards to assimilate</p>
<Link to="/services_details" className="text-decoration-none text-reset fw-bold">Read More <i class="fa-solid fa-arrow-right ps-2 style"></i></Link>
    </figcaption>
    <div className="pos4 p-2">
    <i class="fa-solid fa-laptop-code fs-1"></i>
    </div>
  </figure>
</div>
<div className="col-12 col-md-6 col-lg-3">
<figure className="position-relative border border-2 rounded border-black">
    {/* <div className="scale"> */}
    <img className="img-fluid width" src={service_3} alt=""/>
    {/* </div> */}
    <figcaption className="p-4">
<h5>Digital Marketing</h5>
<p>We’ve designed a culture that allows our stewards to assimilate</p>
<Link to="/services_details" className="text-decoration-none text-reset fw-bold">Read More <i class="fa-solid fa-arrow-right ps-2 style"></i></Link>
    </figcaption>
    <div className="pos4 p-2">
    <i class="fa-solid fa-chart-line fs-1"></i>
    </div>
  </figure>
</div>
  </div>
</div>
    </section>
    </>
  )
}

export default Section2