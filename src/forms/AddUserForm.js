import React from "react";

const AddUserForm = () => {
  return (
    <div>
      <div className="error" />
      <form action="/users/add" method="POST">
        <input type="text" name="username" placeholder="add user" />
        <input type="text" name="email" placeholder="add email" />
        <button> Add new student </button>
      </form>
    </div>
  );
};

export default AddUserForm;
