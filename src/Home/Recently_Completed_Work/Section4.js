import React from "react";
import project_1 from '../../images/illustration/project-1.jpg'
import project_2 from '../../images/illustration/project-2.jpg'
import project_3 from '../../images/illustration/project-3.jpg'
import project_4 from '../../images/illustration/project-4.jpg'

function Section4(){
  return(
    <>
    <section className="container-fluid " id="project">
      <div className="container">
<div className="row align-items-end">
  <div className="col-12 col-md-12 col-lg-6">
  <div className="d-flex mt-5 align-items-center w p-2 px-4">
    <div><p className="style mb-0 pe-3 fw-bold">RECENTLY COMPLETED WORK</p></div>
    <div className="line"></div>
          </div>
      <p className="para2 mb-0">Improve & Enhance the Tech Projects</p>
  </div>
  <div className="col-12 col-md-12 col-lg-6">
    <p className="mb-0 fs-5 text-secondary">There are many variations of passages of available but majority have suffered alteration in some form, by humou or randomised words which don't look even slightly believable.</p>
  </div>
</div>
      </div>

      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 position-relative">
            <div className="pt-2">
              <img className="img-fluid" src={project_4}  alt=""/>
            </div>
            <div className="pos5">
              <h4 className="text-white">Web Development</h4>
              <p className="style fw-bold">DESIGN / IDEAS</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 position-relative">
            <div className="pt-2">
              <img className="img-fluid" src={project_1} alt="" />
            </div>
            <div className="pos5">
              <h4 >Tech Solutions</h4>
              <p className="style fw-bold">DESIGN / IDEAS</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 position-relative">
            <div className="pt-2">
              <img className="img-fluid" src={project_2} alt="" />
            </div>
            <div className="pos5">
              <h4 >Smart Visions</h4>
              <p className="style fw-bold">DESIGN / IDEAS</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 position-relative">
            <div className="pt-2">
              <img className="img-fluid" src={project_3} alt="" />
            </div>
            <div className="pos5">
              <h4 className="text-white">Platform Integration</h4>
              <p className="style fw-bold">DESIGN / IDEAS</p>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Section4;