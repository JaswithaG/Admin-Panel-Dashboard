import { useState } from "react";

import ProductTable from "../../components/Products/ProductTable";
import ProductModal from "../../components/Products/ProductModal";

import "./Products.css";

import macbookImg from "../../assets/images/macbook.jpg";
import iphoneImg from "../../assets/images/iphone.jpg";
import samsungImg from "../../assets/images/samsung.jpg";
import headphonesImg from "../../assets/images/sonyheadphones.jpg";
import mouseImg from "../../assets/images/gamingmouse.jpg";

const Products = () => {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MacBook Pro",
      category: "Laptop",
      price: 1899,
      stock: 12,
      status: "In Stock",
      image: macbookImg,
    },
    {
      id: 2,
      name: "iPhone 16",
      category: "Mobile",
      price: 999,
      stock: 8,
      status: "In Stock",
      image: iphoneImg,
    },
    {
      id: 3,
      name: "Samsung Galaxy S25",
      category: "Mobile",
      price: 1099,
      stock: 15,
      status: "In Stock",
      image: samsungImg,
    },
    {
      id: 4,
      name: "Sony Headphones",
      category: "Accessories",
      price: 199,
      stock: 0,
      status: "Out of Stock",
      image: headphonesImg,
    },
    {
      id: 5,
      name: "Gaming Mouse",
      category: "Accessories",
      price: 59,
      stock: 20,
      status: "In Stock",
      image: mouseImg,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const openAddProduct = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const openEditProduct = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const saveProduct = (productData) => {
    if (editingProduct) {
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id
            ? {
                ...productData,
                id: editingProduct.id,
              }
            : product
        )
      );
    } else {
      setProducts([
        ...products,
        {
          ...productData,
          id: Date.now(),
        },
      ]);
    }

    setShowModal(false);
  };

  const deleteProduct = (id) => {
    setProducts(
      products.filter(
        (product) => product.id !== id
      )
    );
  };

  return (
    <div className="products-page">

      <div className="products-header">

        <div>
          <h1>Products Management</h1>
          <p>Manage your products and inventory</p>
        </div>

        <button
          className="add-product-btn"
          onClick={openAddProduct}
        >
          + Add Product
        </button>

      </div>

      <ProductTable
        products={products}
        onEdit={openEditProduct}
        onDelete={deleteProduct}
      />

      {showModal && (
        <ProductModal
          product={editingProduct}
          onSave={saveProduct}
          onClose={() => setShowModal(false)}
        />
      )}

    </div>
  );
};

export default Products;