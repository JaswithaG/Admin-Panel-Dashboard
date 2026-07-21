import { useState } from "react";
import UserTable from "../../components/Users/UserTable";
import UserModal from "../../components/Users/UserModal";
import "./Users.css";

const Users = () => {
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
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const openAddUser = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const openEditUser = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const saveUser = (userData) => {
    if (editingUser) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id
            ? { ...userData, id: editingUser.id }
            : user
        )
      );
    } else {
      setUsers([
        ...users,
        {
          ...userData,
          id: Date.now(),
        },
      ]);
    }

    setShowModal(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="users-page">
      <div className="users-header">
        <div>
          <h1>User Management</h1>
          <p>Manage all users in your dashboard</p>
        </div>

        <button
          className="add-user-btn"
          onClick={openAddUser}
        >
          + Add User
        </button>
      </div>

      <UserTable
        users={users}
        onEdit={openEditUser}
        onDelete={deleteUser}
      />

      {showModal && (
        <UserModal
          user={editingUser}
          onSave={saveUser}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Users;