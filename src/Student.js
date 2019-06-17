import React, { useState, useEffect, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";


export const Student = () => {
  // Setting state
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ id: null, name: "", username: "" });
  const [editing, setEditing] = useState(false);
  
  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(usersData => setUsers(usersData));
  }, []);

  postNewUser(async (body) => {
    try {
      const response = fetch('/users/add', {
        method: 'POST',
        body: body && JSON.stringify(body),
        mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
              'Content-Type': 'application/json',
          },
      });
      return await response.json();
    }
    catch(err) {
      console.log(err);
    }
  })

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
      <h1>Student </h1>
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
              <h2>Add student</h2>
              <AddUserForm onSubmit={() => this.postNewUser()} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View Student</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Student;
