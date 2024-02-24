import React from 'react'
import { Link } from 'react-router-dom'
import Section6 from '../Home/Map/Section6'


function Contact() {
  return (
    
<>

<div className='Services_bg d-flex align-items-center mb-5'>
<div className='ps-5'>
  <h1 className='text-white fw-bold'>Contact</h1>

  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item "> <Link className='style text-decoration-none' to="/">Home</Link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">Contact</li>
  </ol>
</nav>
</div>

    </div>



<div>
<div className='container mt-5 mb-5' >

<div className='row justify-content-between'>

<div className='col-lg-6 p-0'>

<div>
<form action="#">
<div className="d-flex mt-5 align-items-center w p-2 px-4">
    <div><p className="style mb-0 pe-3 fw-bold">SEND US EMAIL</p></div>
    <div className="line"></div>
</div>

<div>
  <h1 className='py-2'>Feel Free To Write</h1>
</div>

<div className='row justify-content-between  mb-4'>
  <div className='col-5'><input className='w-100 p-3 border-0 bg-light form-control' required type="text" placeholder='Enter name' /></div>
  <div className='col-5'><input  className='w-100 p-3 border-0 bg-light form-control' required type="text" placeholder='Enter Email' /></div>
</div>

<div className='row justify-content-between mb-4'>
  <div className='col-5'><input className='w-100 p-3 border-0 bg-light form-control' required  type="text" placeholder='Enter Subject' /></div>
  <div className='col-5'><input  className='w-100 p-3 border-0 bg-light form-control' required type="text" placeholder='Enter Phone' /></div>
</div>

<div className=''>
<textarea  className="form-control bg-light border-0  " rows="7" placeholder="Enter Message" aria-invalid="true"></textarea>
</div>


<div className="py-2 mt-3">
  <button type='submit' className="custom-btn btn-14 fw-bold ">SEND MESSAGE</button>
  <button type='reset' className="custom-btn btn-14 fw-bold ms-3">RESET</button>
  </div>

  </form>
</div>



</div>



<div className='col-lg-5 p-0'>
  
  <div>

  <div className="d-flex mt-5 align-items-center w p-2 px-4">
    <div><p className="style mb-0 pe-3 fw-bold">NEED ANY HELP?</p></div>
    <div className="line"></div>
</div>

<div>
  <h1 className='py-2'>Get in Touch With us</h1>
  <p>Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply free ut labore et dolore magna aliqua.</p>
</div>

<div className='mt-5'>

<div>
  <figure className='d-flex'>
  <i class="fa-solid fa-phone-flip p-4 bg-dark style fs-2"></i>
    <figcaption className='ps-3'>
    <strong >Have any Question?</strong>
    <p className='my-3 fw-bold text-secondary'>Free <a href="tel:920209850" className='anchor'> +92(020)-9850</a></p>
    </figcaption>
  </figure>
</div>


<div>
  <figure className='d-flex'>
  <i class="fa-regular fa-envelope p-4 bg-dark style fs-2"></i>
    <figcaption className='ps-3'>
    <strong >Write Mail</strong>
    <p className='my-3 fw-bold text-secondary'> <a href="mailto:needhelp@company.com" className='anchor'> needhelp@company.com</a></p>
    </figcaption>
  </figure>
</div>


<div>
  <figure className='d-flex'>
  <i class="fa-solid fa-street-view p-4 bg-dark style fs-2"></i>
    <figcaption className='ps-3'>
    <strong >Visit Anytime</strong>
    <p className='my-3 fw-bold text-secondary'>66 broklyn golden street. New York</p>
    </figcaption>
  </figure>
</div>

</div>


  </div>

</div>
   
</div>

</div>
</div>





<Section6/>


</>

  )
}

export default Contact