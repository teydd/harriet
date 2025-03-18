import React from 'react'
import { Scale, Sprout, Leaf } from 'lucide-react';

export default function About() {
  return (
    <>
    <div className="container-xxl">
      <div className="text-center ">
        <h1 className="my-4 fw-bold">Our Mission</h1>
        <p className="lead">
          To empower farmers by providing a seamless, transparent and efficient online Marketplace that connects them directly with buyers, ensuring fair trade, reduced post-harvest losses, and improved livelihoods while delivering Fresh, high quality Farm produce to customers and businesses.
        </p>
      </div>

      <h2 className="text-center my-4">Our Values</h2>

      <div className="">
        <div className="text-center">
          <div className="my-3">
          <Scale className=" text-success" />           
          </div>
          <h3 className="fw-bold">Fair and Transparent Trade</h3>
          <p className="fs-3">
            Ensuring farmers get fair prices and buyers receive high quality product through an open and honest market place
          </p>
        </div>

        <div className="text-center">
          <div className="my-3">
          <Sprout className="h-16 w-16 text-success" />
          </div>
          <h3 className="fw-bold">Empowerment and Growth</h3>
          <p className="fs-3">
            Providing farmers with tools, market access and resources to expand their business and improve their livelihood
          </p>
        </div>

        <div className="text-center">
          <div className="my-3">
          <Leaf className="h-16 w-16 text-success" />
          </div>
          <h3 className="fw-bold">Sustainability and Innovation</h3>
          <p className="fs-3">
            Leveraging technology to create a sustainable efficient and eco-friendly agricultural trade system
          </p>
        </div>
      </div>
    </div>

    </>
  )
}
