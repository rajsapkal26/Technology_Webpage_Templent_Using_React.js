import React from 'react'
import { Link } from 'react-router-dom'
import Section1 from '../Home/About our company/Section1'
import Section4 from '../Home/Recently_Completed_Work/Section4'

function About_our_company() {
  return (
    <>
    
   
    <div className='Services_bg d-flex align-items-center mb-5'>
<div className='ps-5'>
  <h1 className='text-white fw-bold'>About Us</h1>

  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"> <Link to="/" className='style text-decoration-none'>Home</Link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">About Us</li>
  </ol>
</nav>
</div>

    </div>

<Section1/>
<Section4/>


    
    </>
  )
}

export default About_our_company