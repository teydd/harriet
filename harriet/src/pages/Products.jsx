import React, { useState } from 'react';
import { Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CATEGORIES = {
  'Fruits': ['Apples', 'Mangoes', 'Bananas'],
  'Vegetables': ['Tomatoes', 'Carrots', 'Lettuce'],
  'Grains': ['Rice', 'Wheat', 'Maize'],
  'Livestock and Poultry': ['Goats and Sheep', 'Chicken', 'Ducks', 'Pigs'],
  'Dairy': ['Milk', 'Butter', 'Cheese'],
  'Seeds and Seedlings': ['Fruit Seeds', 'Grain Seeds', 'Flower Seedlings']
};

const SAMPLE_PRODUCTS = [
  { id: '1', name: 'Fresh Tomatoes', category: 'Vegetables', price: 7, unit: 'kg', farmer: "John's Farm", image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Red Apples', category: 'Fruits', price: 3.99, unit: 'kg', farmer: "Green Valley Farm", image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Fresh Milk', category: 'Dairy', price: 2.49, unit: 'liter', farmer: "Dairy Dreams", image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Free-Range Chicken', category: 'Livestock and Poultry', price: 15.99, unit: 'bird', farmer: "Sunny Farms", image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400' },
  { id: '5', name: 'Organic Rice', category: 'Grains', price: 5.99, unit: 'kg', farmer: "Golden Grains", image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400' },
  { id: '6', name: 'Farm Butter', category: 'Dairy', price: 6.49, unit: 'pack', farmer: "Dairy Dreams", image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400' },
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
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <Search size={18} />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
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
