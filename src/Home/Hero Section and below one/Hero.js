import React from "react";
import Below_Hero from './Below_Hero';
import Section1 from '../About our company/Section1';
import Section2 from '../Service we are offering/Section2';
import Section3 from '../Discover_More/Section3';
import Section4 from '../Recently_Completed_Work/Section4';
import Section5 from '../Number_increment/Section5';
import Section6 from '../Map/Section6';
import Feedbacks from '../Feedbacks/Feedbacks';
import { Link } from "react-router-dom";


function Hero(){
  return(
    <>


    
    <div className="Bg-img">
      <div className="container pt-5 position-relative">
<div className="d-flex mt-5 align-items-center w p-2 px-4">
  <div className="line"></div>
    <div><p className="text-white mb-0 ps-3">SOLUTIONS FOR YOUR BUSINESS</p></div>
</div>
<p className="text-white col-8 fs pt-2 fw-bold">IT Solutions <span className="span">&</span> Technology</p>
<p className="text-secondary pt-2 fs-5 w2">It is a longer will be distracted by the readable content of a page when. Lorem Ipsum is that it has a more-or-less normal distribution of letters,
</p>
<div className="py-2"><Link to="/about_us" className="custom-btn btn-14 fw-bold ">DISCOVER MORE</Link></div>
<div className="pos">
  <img src="https://kodesolution.com/html/2022/oitech-html/images/main-slider/arrow.png" alt="" />
</div>
    </div>
    </div>


    <div className="container ">
<div className="row justify-content-evenly ">
<Below_Hero />
<Below_Hero />
<Below_Hero />
</div>
</div>

<Section1/>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Feedbacks/>
<Section6/>


    </>
  )
}


export default Hero;