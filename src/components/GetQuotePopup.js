import React, { useState } from "react";
import "./GetQuotePopup.css";

const products = [
  "PP Fabric",
  "PP Bags",
  "Monolayer Films",
  "Multifilament Yarn",
  "Reprocess Granules",
];

const GetQuotePopup = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    product: "",
  });

  const [errors, setErrors] = useState({});

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone number";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.product.trim()) newErrors.product = "Please select a product";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", form);
      alert("Quote request submitted!");
      onClose();
    }
  };

  return (
    <div className="pop-up-overlay">
      <div className="pop-up-modal">
        <span className="pop-up-close" onClick={onClose}>
          ×
        </span>

        <h3 className="pop-up-title">Get a Quote</h3>

       <form className="pop-up-form" onSubmit={handleSubmit}>
  <div className="pop-up-field">
    <label className="pop-up-label">Full Name</label>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      className="pop-up-input"
      placeholder="Enter your full name"
    />
    {errors.name && <span className="pop-up-error">{errors.name}</span>}
  </div>

  <div className="pop-up-field">
    <label className="pop-up-label">Phone Number</label>
    <input
      type="text"
      name="phone"
      value={form.phone}
      onChange={handleChange}
      className="pop-up-input"
      placeholder="Enter your phone number"
    />
    {errors.phone && <span className="pop-up-error">{errors.phone}</span>}
  </div>

  <div className="pop-up-field">
    <label className="pop-up-label">Email</label>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      className="pop-up-input"
      placeholder="Enter your email"
    />
    {errors.email && <span className="pop-up-error">{errors.email}</span>}
  </div>

  <div className="pop-up-field">
    <label className="pop-up-label">Address</label>
    <textarea
      name="address"
      value={form.address}
      onChange={handleChange}
      className="pop-up-textarea"
      rows="3"
      placeholder="Enter your address"
    ></textarea>
    {errors.address && (
      <span className="pop-up-error">{errors.address}</span>
    )}
  </div>

  <div className="pop-up-field">
    <label className="pop-up-label">Select Product</label>
    <select
      name="product"
      value={form.product}
      onChange={handleChange}
      className="pop-up-input"
    >
      <option value="">Select Product</option>
      {products.map((p, i) => (
        <option key={i} value={p}>
          {p}
        </option>
      ))}
    </select>
    {errors.product && (
      <span className="pop-up-error">{errors.product}</span>
    )}
  </div>

  <button type="submit" className="pop-up-submit-btn">
    Submit
  </button>
</form>

      </div>
    </div>
  );
};

export default GetQuotePopup;
