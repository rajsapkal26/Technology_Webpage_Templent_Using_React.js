import React from 'react';
import Service_Section from './Service_Section';
import { Link } from 'react-router-dom';

function Services_Hero() {
  return (
    <>
    
    
    <div className='Services_bg d-flex align-items-center'>
<div className='ps-5'>
  <h1 className='text-white fw-bold'>Services</h1>

  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"> <Link to="/" className='style text-decoration-none'>Home</Link>
</li>
    <li class="breadcrumb-item"><Link to="/services_list" className='style text-decoration-none'>Services</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Services Details</li>
  </ol>
</nav>
</div>

    </div>

    <Service_Section/>
    
    </>
  )
}

export default Services_Hero;