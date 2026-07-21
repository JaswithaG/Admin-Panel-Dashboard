import { useEffect, useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "Electronics",
    price: "",
    stock: "",
    status: "In Stock",
    image: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Product name is required";

    if (!formData.price)
      newErrors.price = "Price is required";

    if (Number(formData.price) < 0)
      newErrors.price = "Invalid price";

    if (!formData.stock)
      newErrors.stock = "Stock is required";

    if (Number(formData.stock) < 0)
      newErrors.stock = "Invalid stock";

    if (!formData.image.trim())
      newErrors.image = "Image URL is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSave({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });
  };

  return (
    <form className="product-form" onSubmit={submitForm}>
      <div className="form-group">
        <label>Product Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
        />

        {errors.name && (
          <small>{errors.name}</small>
        )}
      </div>

      <div className="form-group">
        <label>Category</label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Electronics</option>
          <option>Laptop</option>
          <option>Mobile</option>
          <option>Accessories</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Price ($)</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="0"
          />

          {errors.price && (
            <small>{errors.price}</small>
          )}
        </div>

        <div className="form-group">
          <label>Stock</label>

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="0"
          />

          {errors.stock && (
            <small>{errors.stock}</small>
          )}
        </div>
      </div>

      <div className="form-group">
        <label>Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>

      <div className="form-group">
        <label>Image URL</label>

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
        />

        {errors.image && (
          <small>{errors.image}</small>
        )}
      </div>

      {formData.image && (
        <div className="image-preview">
          <img
            src={formData.image}
            alt="Preview"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="form-buttons">
        <button
          type="button"
          className="cancel-btn"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="save-btn"
        >
          {product ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;