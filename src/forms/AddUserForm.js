import React from "react";

async function postNewUser() {
  const username = document.getElementById('username-input').value;
  const email = document.getElementById('email-input').value;
  //TODO: we can also add some logic to see if the fields actully have values and we can take the checks of the server call
  //TODO: add some filtering logic to make sure you are receving an actual email like string
  const body = {
    username: username,
    email: email,
  }

  try {
    const response = await fetch('/users/add', {
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
}

function handleSubmit(event) {
  event.preventDefault();
  postNewUser();
}

const AddUserForm = () => {
  return (
    <div>
      <div className="error" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input id="username-input" type="text" name="username" placeholder="add user" />
        <input id="email-input" type="text" name="email" placeholder="add email" />
        <button> Add new student </button>
      </form>
    </div>
  );
};

export default AddUserForm;
