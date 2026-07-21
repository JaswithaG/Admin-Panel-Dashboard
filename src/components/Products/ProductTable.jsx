import { useState } from "react";
import {
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./ProductTable.css";

const ProductTable = ({
  products,
  onEdit,
  onDelete,
}) => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    product.category
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="product-table-card">

      {/* Search */}

      <div className="table-header">

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      {/* Table */}

      <div className="table-responsive">

        <table className="product-table">

          <thead>

            <tr>

              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredProducts.length === 0 ? (

              <tr>

                <td
                  colSpan="7"
                  className="no-data"
                >
                  No Products Found
                </td>

              </tr>

            ) : (

              filteredProducts.map((product) => (

                <tr key={product.id}>

                  <td>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                  </td>

                  <td>{product.name}</td>

                  <td>{product.category}</td>

                  <td>${product.price}</td>

                  <td>{product.stock}</td>

                  <td>

                    <span
                      className={
                        product.status ===
                        "In Stock"
                          ? "status in-stock"
                          : "status out-stock"
                      }
                    >
                      {product.status}
                    </span>

                  </td>

                  {/* Actions */}

                  <td className="actions-cell">

                    <button
                      className="action-btn edit-btn"
                      onClick={() =>
                        onEdit(product)
                      }
                      title="Edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="action-btn delete-btn"
                      onClick={() =>
                        onDelete(product.id)
                      }
                      title="Delete"
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProductTable;