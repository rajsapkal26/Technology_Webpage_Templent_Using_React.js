import React from 'react';
import { Link } from 'react-router-dom';
import service_details from '../../images/illustration/service-details.jpg'



function Service_Section() {
  return (
    
<>
<div className='container mt-5 mb-5' >

<div className='row justify-content-between'>

<div className='col-lg-4 p-0'>

<div className='service_section_bg rounded-2 p-5'>
<div>
  <div className='style py-2'><i class="fa-brands fa-codiepie fs-1"></i></div>

<h2 className='text-white py-2'>BE HEALTHY AND EAT ONLY FRESH</h2>

<div className="py-2"><Link to="/contact" className="custom-btn btn-14 fw-bold ">CONTACT US</Link></div>

</div>
</div>

</div>
<div className='col-lg-7 p-0'>
  <div>
    <img className='img-fluid' src={service_details} alt="" />
  </div>
  <div>
    <h1 className='py-2'>Service Overview</h1>
    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>

    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
  </div>
  <div>
    <h1 className='py-2'>Service Center</h1>
    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

</p>
</div>

<div className='row justify-content-between'>
  <ul className='col-lg-6'>
    <li className='p-2 my-2 border border-dark'>FAST HOME DELIVERY</li>
    <li className='p-2 my-2 border border-dark'>DELIVERING BEST PRODUCTS</li>
    <li className='p-2 my-2 border border-dark'>GENERATOR SYSTEMS</li>
  </ul>
  <ul className='col-lg-5'>
  <li className='p-2 my-2 border border-dark'>SECURE PAYMENT</li>
    <li className='p-2 my-2 border border-dark'>FOOD INSPECTIONS</li>
    <li className='p-2 my-2 border border-dark'>ASSESSMENTS</li>
  </ul>
</div>

<div>
  <h1 className='py-2'>Frequently Asked Question</h1>
  <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
</div>

<div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
          Is my technology allowed on tech?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          How to soft launch your business?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          How to turn visitors into contributors
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
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

export default Service_Section;