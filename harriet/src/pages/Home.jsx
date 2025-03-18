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
          {categories.map((category) => (
            <div key={category.name} className="text-center col-md-3">
              <img src={category.image} alt={category.name} className="img-fluid" />
              <div className="p-4">
                <h3 className="">{category.name}</h3>
                <Link
                  to={`/products?category=ksh{category.name.toLowerCase()}`}
                  className="btn btn-success"
                >
                  View Products →
                </Link>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}
