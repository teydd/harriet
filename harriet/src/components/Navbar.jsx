import React from 'react'


export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-xxl">
    <a class="navbar-brand text-white" href="/"><i class="bi bi-basket"> </i>
     FarmConnect</a>
    <button class="btn btn-white navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="/products">Marketplace</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="/farmers">Farmers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="/contact">Contact</a>
        </li>
      </ul>
            <div className='d-md-flex d-sm-block'>
            <a className='nav-link' href="/cart"><i class="bi bi-cart fs-3 px-4"></i>
            </a>
              <a className='nav-link' href="/signup"><i class="bi bi-person-circle fs-3"></i></a>
              </div>
    </div>
  </div>
</nav>
    </>
  )
}
