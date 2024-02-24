import React from 'react';
import Section2 from '../../Home/Service we are offering/Section2';
import { Link } from 'react-router-dom';

function Services_list() {
  return (
    <>
      <div className='Services_bg d-flex align-items-center'>
<div className='ps-5'>
  <h1 className='text-white fw-bold'>Services</h1>

  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"> <Link to="/" className='style text-decoration-none'>Home</Link>
</li>
    <li class="breadcrumb-item active" aria-current="page">Services List</li>
  </ol>
</nav>
</div>

    </div>
    
    <Section2/>
    <Section2/>
    
    </>
  )
}

export default Services_list