import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch users from Firestore
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const querySnapshot = await getDocs(usersCollection);
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        setErrorMessage("Error fetching users.");
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdate = async (userId, updatedData) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, updatedData);

      // Update the local state after modification
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, ...updatedData } : user
        )
      );
      alert("User updated successfully!");
    } catch (error) {
      setErrorMessage("Error updating user.");
      console.error("Error updating user: ", error);
    }
  };

  return (
    <div className="admin-page p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div
              key={user.id}
              className="user-card mb-6 p-4 bg-gray-200 rounded-md"
            >
              <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              <p>Identifier: {user.identifier}</p>
              <p>Balance: {user.balance}</p>
              <p>
                Created At:{" "}
                {user.createdAt
                  ? new Date(user.createdAt.seconds * 1000).toLocaleString()
                  : "N/A"}
              </p>

              <div className="edit-form mt-4">
                <h3 className="font-semibold">Edit User</h3>
                <input
                  type="text"
                  placeholder="Edit First Name"
                  defaultValue={user.firstName}
                  onBlur={(e) =>
                    handleUpdate(user.id, { firstName: e.target.value })
                  }
                  className="p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="Edit Last Name"
                  defaultValue={user.lastName}
                  onBlur={(e) =>
                    handleUpdate(user.id, { lastName: e.target.value })
                  }
                  className="p-2 border rounded mb-2"
                />
                <input
                  type="email"
                  placeholder="Edit Email"
                  defaultValue={user.email}
                  onBlur={(e) =>
                    handleUpdate(user.id, { email: e.target.value })
                  }
                  className="p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="Edit Identifier"
                  defaultValue={user.identifier}
                  onBlur={(e) =>
                    handleUpdate(user.id, { identifier: e.target.value })
                  }
                  className="p-2 border rounded mb-2"
                />
                <input
                  type="number"
                  placeholder="Edit Balance"
                  defaultValue={user.balance}
                  onBlur={(e) =>
                    handleUpdate(user.id, { balance: parseFloat(e.target.value) })
                  }
                  className="p-2 border rounded mb-2"
                />
                <select
                  defaultValue={user.role}
                  onChange={(e) => handleUpdate(user.id, { role: e.target.value })}
                  className="p-2 border rounded mb-2"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
