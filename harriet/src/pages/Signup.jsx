import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [role, setRole] = useState("Customer");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    farmName: "",
    farmLocation: "",
    terms: false,
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { ...formData, role });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 mt-5">
      <div className="col-md-6">
        <h2 className="text-center fw-bold mb-4">Create your account</h2>

        {/* Role Selection */}
        <div className="d-flex justify-content-center mb-3">
          <button
            className={`btn ${role === "Customer" ? "btn-success" : "btn-light"} me-2`}
            onClick={() => setRole("Customer")}
          >
            Customer
          </button>
          <button
            className={`btn ${role === "Farmer" ? "btn-success" : "btn-light"}`}
            onClick={() => setRole("Farmer")}
          >
            Farmer
          </button>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow">
          {/* Common Fields */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Customer-Specific Fields */}
          {role === "Customer" && (
            <div className="mb-3">
              <label className="form-label">Shipping Address</label>
              <textarea
                className="form-control"
                name="address"
                rows="2"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
          )}

          {/* Farmer-Specific Fields */}
          {role === "Farmer" && (
            <>
              <div className="mb-3">
                <label className="form-label">Farm Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="farmName"
                  value={formData.farmName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Farm Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="farmLocation"
                  value={formData.farmLocation}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Checkboxes */}
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">I agree to the terms and conditions</label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">I agree to the privacy policy</label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
