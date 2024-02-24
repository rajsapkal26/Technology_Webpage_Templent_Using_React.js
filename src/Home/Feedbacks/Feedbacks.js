import React from "react";
import './Feedbacks.css';

function Feedbacks() {
  return (
    <>
      <div>
        <div className="text-center py-5" id="team">
          <div className="d-flex align-items-center p-2 px-4 justify-content-center">
            <div><p className="style mb-0 pe-3 fw-bold">OUR FEEDBAKCS</p></div>
            <div className="line"></div>
          </div>
          <h1 className="fw-bold">EXPERTS READY TO SURVE</h1>
        </div>

        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-4 py-3">
                <div className="bg-img-feedbacks-1 ">
                  <div className="names">
                    <p className="mb-0 fw-bold text-white">KEVIN HARDSON</p>
                    <p className="mb-0 fw-bold text-white">DESIGNER</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 py-3">
                <div className="bg-img-feedbacks-2 ">
                  <div className="names">
                    <p className="mb-0 fw-bold text-white">JESSICA BROWN</p>
                    <p className="mb-0 fw-bold text-white">DESIGNER</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 py-3">
                <div className="bg-img-feedbacks-3 3">
                  <div className="names">
                    <p className="mb-0 fw-bold text-white" >MICHALE SMITH</p>
                    <p className="mb-0 fw-bold text-white">CO FOUNDER</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedbacks;