import React from 'react'
import farmer from "../assets/farmer.jpg"
import farmer2 from "../assets/farmer2.jpg"
import farmer1 from "../assets/farmer1.jpg"
import farmer3 from "../assets/farmer3.jpg"
export default function Farmers() {
  return (
    <>
    <h2 className="text-center fw-bold">
      Meet Our Farmers
    </h2>
    <p className="lead text-center fs-4">
    Get to know the passionate people behind your food. Each farmer has a unique story and commitment to quality.
    </p> <br /> <br />
      <div className='container text-center'>
        <div className="row justify-content-betwee justify-content-center">
          <div id='card' className=" m-3">
            <div class="card">
              <img src={farmer} alt="" />
              <div class="card-body">
                <h5>Janet</h5>
                <p class="card-text">Location: Green Valley Farm</p>
                <p class="card-text">Farming: Corn</p>
                <p class="card-text">4.8 (120 reviews)</p>
                <a href="/products" class="btn btn-primary">View Products</a>
              </div>
            </div>
          </div>
          <div id='card' className="m-3 ">
            <div class="card">
              <img src={farmer1} alt="" />
              <div class="card-body">
                <h5 class="card-title">Jacob</h5>
                <p class="card-text">Location: Golden Grains</p>
                <p class="card-text">Farming: Cereal</p>
                <p class="card-text">4.8 (120 reviews)</p>
                <a href="/products" class="btn btn-primary">View Products</a>
              </div>
            </div>
          </div>
          <div id='card' className="m-3 ">
            <div class="card">
              <img src={farmer2} alt="" />
              <div class="card-body">
                <h5 class="card-title">Mbugua</h5>
                <p class="card-text">Location: Golden Grains</p>
                <p class="card-text">Farming: Vegetables</p>
                <p class="card-text">4.8 (120 reviews)</p>
                <a href="/products" class="btn btn-primary">View Products</a>
              </div>
            </div>
            
          </div>
          <div id='card' className="m-3 ">
            <div class="card">
              <img src={farmer2} alt="" />
              <div class="card-body">
                <h5 class="card-title">Victor</h5>
                <p class="card-text">Location: Green Valley Farm</p>
                <p class="card-text">Farming: Sunny Farms</p>
                <p class="card-text">4.8 (120 reviews)</p>
                <a href="/products" class="btn btn-primary">View Products</a>
              </div>
            </div>
            
          </div>
          <div id='card' className="m-3 ">
            <div class="card">
              <img src={farmer3} alt="" />
              <div class="card-body">
                <h5 class="card-title">Sharon</h5>
                <p class="card-text">Location: Dairy Dreams</p>
                <p class="card-text">Farming: dairy Products</p>
                <p class="card-text">4.8 (120 reviews)</p>
                <a href="/products" class="btn btn-primary">View Products</a>
              </div>
            </div>
            
          </div>
          <div id='card' className="m-3 ">
            <div class="card">
              <img src={farmer2} alt="" />
              <div class="card-body">
                <h5 class="card-title">Gilbert</h5>
                <p class="card-text">Location: Green Valley Farm</p>
                <p class="card-text">Farming: Legumes</p>
                <p class="card-text">4.8 (120 reviews)</p>
                <a href="/products" class="btn btn-primary">View Products</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  )
}
