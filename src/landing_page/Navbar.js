import React from 'react';

function Navbar() {
    return ( 
       
 <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#fff"}}>
  <div class="container-fluid p-2">
    <a class="navbar-brand" href="#">
        <img src='media/logo.svg' alt='logo' style={{width:"25%"}}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" role="search">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"150px"}}>
       
        <li class="nav-item mx-3">
          <a class="nav-link active" href="#">Signup</a>
        </li>

         <li class="nav-item mx-3">
          <a class="nav-link active" href="#">About</a>
        </li>

         <li class="nav-item mx-3">
          <a class="nav-link active" href="#">Products</a>
        </li>

         <li class="nav-item mx-3">
          <a class="nav-link active" href="#">Pricing</a>
        </li>

         <li class="nav-item mx-3">
          <a class="nav-link active" href="#">Support</a>
        </li>

         <li class="nav-item mx-3">
          <a class="nav-link active" href="#"></a>
        </li>

        <li className='mt-2 mx-3'>
            <i class="fa fa-bars" aria-hidden="true"></i>
        </li>
       
      </ul>
      </form>
    </div>
  </div>
</nav>

     );
}

export default Navbar;