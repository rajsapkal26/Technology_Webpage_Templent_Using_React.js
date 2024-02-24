import React from "react";
import { Link } from "react-router-dom";


function Section3(){
return(
  <>
  <section className="bg-img2 p-5 mt-5">
<div className="container-fluid border border-1 border-secondary he position-relative">
<div className="d-flex justify-content-center updown-animation pt-5">
  <img src="https://kodesolution.com/html/2022/oitech-html/images/resource/icon-logo.png" alt="" />
</div>
<div className="position-absolute top-50 start-50 translate-middle">
  <p className="para mb-0">IT Solutions & Services</p>
  <p className="para">at your Fingertips</p>
  <div className="py-2 text-center"><Link to="/services_list" className="custom-btn btn-14 fw-bold ">DISCOVER MORE</Link></div>
</div>
</div>
  </section>
  </>
)
  
}

export default Section3;