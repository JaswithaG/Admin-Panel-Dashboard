import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import "./UserTable.css";

const UserTable = ({
  users,
  onEdit,
  onDelete,
}) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.role
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="user-table-card">

      <div className="table-top">

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      <div className="table-responsive">

        <table className="user-table">

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

            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="no-data"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id}>

                  <td>

                    <div className="user-info">

                      <FaUserCircle className="avatar" />

                      <span>{user.name}</span>

                    </div>

                  </td>

                  <td>{user.email}</td>

                  <td>{user.role}</td>

                  <td>

                    <span
                      className={`status ${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>

                  </td>

                  <td>

                    <div className="actions">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          onEdit(user)
                        }
                      >
                        <FaEdit />
                      </button> &nbsp;

                      <button
                        className="delete-btn"
                        onClick={() =>
                          onDelete(user.id)
                        }
                      >
                        <FaTrash />
                      </button>

                    </div>

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

export default UserTable;