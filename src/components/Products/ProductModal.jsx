import { FaTimes } from "react-icons/fa";
import ProductForm from "./ProductForm";
import "./ProductModal.css";

const ProductModal = ({
  product,
  onSave,
  onClose,
}) => {
  return (
    <div
      className="product-modal-overlay"
      onClick={onClose}
    >
      <div
        className="product-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="product-modal-header">
          <h2>
            {product ? "Edit Product" : "Add Product"}
          </h2>

          <button
            className="product-close-btn"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>

        <div className="product-modal-body">
          <ProductForm
            product={product}
            onSave={onSave}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;