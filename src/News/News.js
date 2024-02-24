import React from 'react'
import { Link } from 'react-router-dom'
import '../News/News.css'
import News_details from '../images/illustration/news-details.jpg'
import news_1 from '../images/illustration/news-1.jpg'
import news_2 from '../images/illustration/news-2.jpg'
import news_3 from '../images/illustration/news-3.jpg'

function News() {
  return (
    <>
    
    <div className='Services_bg d-flex align-items-center'>
<div className='ps-5'>
  <h1 className='text-white fw-bold'>News</h1>

  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"> <Link to="/" className='style text-decoration-none'>Home</Link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">News Details</li>
  </ol>
</nav>
</div>

    </div>


    <div className='container mt-5 mb-5' >

<div className='row justify-content-between'>

<div className='col-lg-7 p-0'>

<div className=' rounded-2'>
<img className='img-fluid' src={News_details} alt="" />
</div>

<div className='py-3'>
<span><i class="fa-regular fa-user pe-2 style"></i>Admin</span>
<span className='ps-5'><i class="fa-solid fa-comments style"></i>Comments</span>
</div>

<div >
  <h2>We’re Leader In Tecnology Market
</h2>
<p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>

<p>
Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
</p>

<p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
</div>

<hr />



</div>
<div className='col-lg-4 p-0'>
  
  <div className='news_feed p-4 rounded-3'>

    <h3 className='pb-3'>Latest Posts</h3>

    <div >
  <figure className='d-flex mb-0'>
    <div className='figure-img '>
    <img className='img-fluid rounded-3' src={news_1} alt="" />
    </div>
    <figcaption className='ps-3'>
    <p><i class="fa-regular fa-user pe-2 style"></i>Admin</p>
    <strong>Necessity may give us best virtual court</strong>
    </figcaption>
  </figure>
</div>


<div >
  <figure className='d-flex mb-0'>
    <div className='figure-img '>
    <img className='img-fluid rounded-3' src={news_2}  alt="" />
    </div>
    <figcaption className='ps-3'>
    <p><i class="fa-regular fa-user pe-2 style"></i>Admin</p>
    <strong>Necessity may give us best virtual court</strong>
    </figcaption>
  </figure>
</div>


<div className=''>
  <figure className='d-flex mb-0 '>
    <div className='figure-img mb-0'>
    <img className='img-fluid rounded-3' src={news_3} alt="" />
    </div>
    <figcaption className='ps-3'>
    <p><i class="fa-regular fa-user pe-2 style"></i>Admin</p>
    <strong>Necessity may give us best virtual court</strong>
    </figcaption>
  </figure>
</div>

  </div>

  <div className='news_feed p-4 mt-5 rounded-3'>

<h3 className='pb-3'>Categories</h3>

<div className='p-3 hover'>
<strong>Artificial Intalligene</strong>
</div>


<div className='p-3 hover'>
<strong>Cloud Solutions</strong>
</div>


<div className='p-3 hover'>
<strong>Cyber Data</strong>
</div>

<div className='p-3 hover'>
<strong>CEO Marketing</strong>
</div>

<div className='p-3 hover'>
<strong>UI/UX Design</strong>
</div>

<div className='p-3 hover'>
<strong >Web Development</strong>
</div>

</div>
   
</div>

</div>
</div>

    
    </>
  )
}

export default News