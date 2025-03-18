import React, { useState } from 'react';
import { Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import grains from "../assets/garins.jpg";
import fruits from "../assets/fruits.jpg";
import veges from "../assets/veges.jpg";
import dairy from "../assets/dairy.jpg";
import live from "../assets/live.jpg";


const CATEGORIES = {
  'Fruits': ['Apples', 'Mangoes', 'Bananas'],
  'Vegetables': ['Tomatoes', 'Carrots', 'Lettuce'],
  'Grains': ['Rice', 'Wheat', 'Maize'],
  'Livestock and Poultry': ['Goats and Sheep', 'Chicken',],
  'Dairy': ['Milk', 'Butter', 'Cheese'],
};

const SAMPLE_PRODUCTS = [
  { id: '1', name: 'Fresh Tomatoes', category: 'Vegetables', price:1, unit: 'kg', farmer: "John's Farm", image:"src/assets/Tomatoes.jpeg" },
  { id: '2', name: 'Carrots', category: 'Vegetables', price: 1.3, unit: 'kg', farmer: "John's Farm", image:"src/assets/Carrots.jpg" },
  { id: '3', name: 'Lettuce', category: 'Vegetables', price: 2.5, unit: 'kg', farmer: "John's Farm", image: "src/assets/Lettuce.jpg" },
  { id: '1', name: 'Red Apples', category: 'Fruits', price: 2, unit: 'kg', farmer: "Green Valley Farm", image: "src/assets/Apples.jpeg" },
  { id: '2', name: 'Mangoes', category: 'Fruits', price: 1.3, unit: 'kg', farmer: "Green Valley Farm", image:"src/assets/Mangoes.jpeg" },
  { id: '3', name: 'Bananas', category: 'Fruits', price: 1, unit: 'kg', farmer: "Green Valley Farm", image:"src/assets/Bananas.jpeg" },
  { id: '1', name: 'Fresh Milk', category: 'Dairy', price: 2.4, unit: 'liter', farmer: "Dairy Dreams", image: "src/assets/Milk.jpg" },
  { id: '2', name: 'Butter', category: 'Dairy', price: 2.49, unit: 'liter', farmer: "Dairy Dreams", image: "src/assets/Butter.jpg" },
  { id: '3', name: 'Cheese', category: 'Dairy', price: 3, unit: 'gram', farmer: "Dairy Dreams", image:"src/assets/Cheese.jpg" },
  { id: '1', name: 'Free-Range Chicken', category: 'Livestock and Poultry', price: 15.99, unit: 'bird', farmer: "Sunny Farms", image:"src/assets/Chickens.jpg" },
  { id: '2', name: 'Goat', category: 'Livestock and Poultry', price: 15.99, unit: 'livestock', farmer: "Sunny Farms", image: "src/assets/Goats.jpg" },
  { id: '3', name: 'Sheep', category: 'Livestock and Poultry', price: 15.99, unit: 'livestock', farmer: "Sunny Farms", image: "src/assets/Sheeps.jpg" },
  { id: '1', name: 'Organic Rice', category: 'Grains', price: 2, unit: 'kg', farmer: "Golden Grains", image:"src/assets/Rice.jpg" },
  { id: '2', name: 'Wheat', category: 'Grains', price: 1.4, unit: 'kg', farmer: "Golden Grains", image:"src/assets/Wheat.jpg" },
  { id: '3', name: 'Maize', category: 'Grains', price: 2.4, unit: 'kg', farmer: "Golden Grains", image:"src/assets/Maize.jpg" },
  
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFarmers, setSelectedFarmers] = useState([]);

  const filteredProducts = SAMPLE_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesFarmer = selectedFarmers.length === 0 || selectedFarmers.includes(product.farmer);
    return matchesSearch && matchesCategory && matchesFarmer;
  });

  return (
    <div className="container py-4">
      <div className="row">
        
        {/* Sidebar Filters */}
        <div className="col-md-3">
          <h4 className="mb-3">Categories</h4>
          {Object.keys(CATEGORIES).map((category) => (
            <div key={category} className="mb-2">
              <label className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedCategories.includes(category)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategories([...selectedCategories, category]);
                    } else {
                      setSelectedCategories(selectedCategories.filter((c) => c !== category));
                    }
                  }}
                />
                <span className="form-check-label fw-semibold">{category}</span>
              </label>
              <div className="ms-3 text-secondary">{CATEGORIES[category].join(', ')}</div>
            </div>
          ))}

          <h4 className="mt-4 mb-3">Farmers</h4>
          {Array.from(new Set(SAMPLE_PRODUCTS.map(p => p.farmer))).map((farmer) => (
            <div key={farmer} className="mb-2">
              <label className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedFarmers.includes(farmer)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedFarmers([...selectedFarmers, farmer]);
                    } else {
                      setSelectedFarmers(selectedFarmers.filter((f) => f !== farmer));
                    }
                  }}
                />
                <span className="form-check-label">{farmer}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="mb-4">
            
          </div>

          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '180px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="text-muted">From: {product.farmer}</p>
                    <p className="small text-secondary">Category: {product.category}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">KSh {Math.round(product.price * 100).toLocaleString()}/{product.unit}</span>

                      <button className="btn btn-success">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
