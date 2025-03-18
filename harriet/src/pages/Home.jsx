import React from 'react'
import { Link } from 'react-router-dom';
import veges from '../assets/veges.jpg';
import fruits from '../assets/fruits.jpg';
import garins from '../assets/garins.jpg';
import dairy from '../assets/dairy.jpg';

export default function Home() {
  const categories = [
    {
      name: 'Vegetables',
      image: veges,
    },
    {
      name: 'Fruits',
      image: fruits,
    },
    {
      name: 'Grains',
      image: garins,
    },
    {
      name: 'Dairy',
      image: dairy,
    },
  ];
  return (
    <>
    <div className='container-xxl'>
      <div className="container">
        <div className="text-center m-5">
          <h2 className='fs-1'>
          Why choose FarmConnect?
          </h2>
          <p className="h4 lead fs-3">
            We connect Farmers directly with consumers cutting out the middleman and ensuring fair prices for all
          </p>
          <br />
         <a className='btn btn-lg btn-success' href="/products">Browse Products</a>
        </div>
      </div>
    </div>
      <div className='container'>
        <div className="row container">
          <div className="col-6">
            <img className='img-fluid rounded' src={veges} alt="" />
          </div>
          <div className="col-6 text-center">
            <h2 className='fs-1 mt-5'>Vegetables</h2>
            <p>Farm to table fresh vegatable</p>
          </div>
        </div>
        <div className="row container">
        <div className="col-6 text-center">
            <h2 className='fs-1 mt-5'>Fruits</h2>
            <p>Farm to table freshly picked fruits</p>
          </div>
          <div className="col-6 text-center">
            <img className='img-fluid rounded' src={fruits} alt="" />
          </div>
        </div>
        <div className="row container">
        <div className="col-6">
            <img className='img-fluid rounded' src={dairy} alt="" />
          </div>
        <div className="col-6 text-center">
            <h2 className='fs-1 mt-5'>Dairy</h2>
            <p>Top notch and high quality dairy products readily available</p>
          </div>
        </div>
        <div className="row container text-center">
        <div className="col-6 text-center">
            <h2 className='fs-1 mt-5'>Grains</h2>
            <p className=''>High standard and quality assured grains</p>
          </div>
          <div className="col-6">
            <img className='img-fluid rounded' src={garins} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
