import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
       
 <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#fff"}}>
  <div class="container-fluid p-2">
    <Link class="navbar-brand" to={"/"}>
        <img src='media/logo.svg' alt='logo' style={{width:"25%"}}/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" role="search">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"150px"}}>
       
        <li class="nav-item mx-3">
          <Link class="nav-link active" to={"/signup"}>Signup</Link>
        </li>

         <li class="nav-item mx-3">
          <Link class="nav-link active" to={"/about"}>About</Link>
        </li>

         <li class="nav-item mx-3">
          <Link class="nav-link active" to={"product"}>Products</Link>
        </li>

         <li class="nav-item mx-3">
          <Link class="nav-link active" to={"/pricing"}>Pricing</Link>
        </li>

         <li class="nav-item mx-3">
          <Link class="nav-link active" to={"/support"} >Support</Link>
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