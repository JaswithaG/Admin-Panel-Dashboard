import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUserCircle,
} from "react-icons/fa";

import "./DataTable.css";

const RecentUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Emma Watson",
      email: "emma@gmail.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "David Miller",
      email: "david@gmail.com",
      role: "Customer",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Sophia Lee",
      email: "sophia@gmail.com",
      role: "Customer",
      status: "Pending",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael@gmail.com",
      role: "Seller",
      status: "Active",
    },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (name) => {
    alert(`Edit user: ${name}`);
  };

  return (
    <div className="table-card">

      <div className="table-header">

        <h2>Recent Users</h2>

        <button className="view-btn">
          View All
        </button>

      </div>

      <div className="table-responsive">

        <table className="dashboard-table">

          <thead>

            <tr>

              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.id}>

                <td>

                  <div className="user-info">

                    <FaUserCircle className="user-avatar" />

                    <span>{user.name}</span>

                  </div>

                </td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td>

                  <span
                    className={`badge ${user.status.toLowerCase()}`}
                  >
                    {user.status}
                  </span>

                </td>

                <td>

                  <div className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() =>
                        editUser(user.name)
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteUser(user.id)
                      }
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecentUsers;