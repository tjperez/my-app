import React, { useState, useEffect, Fragment } from "react";
import AddUserForm from "../forms/AddUserForm";
import EditUserForm from "../forms/EditUserForm";
// import UserTable from "..tables";

export const Campus = () => {
  // Setting state
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ id: null, name: "", username: "" });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(usersData => setUsers(usersData));
  }, []);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="container">
      <h1>Campus </h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Campus</h2>
              <AddUserForm />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View Campuses</h2>
          {/* <UserTable users={users} editRow={editRow} deleteUser={deleteUser} /> */}
        </div>
      </div>
    </div>
  );
};

export default Campus;

// export const Campus = () => (
//   <div>
//     <h2>Campus Page</h2>
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//       velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//       est laborum.
//     </p>
//   </div>
// );
