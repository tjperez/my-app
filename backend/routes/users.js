const User = require("../models/User");
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  User.findAll()
    .then(users => res.send(users))
  .catch(err => console.log(err));
});

router.post('/add', (req, res) => {
  let { username, email } = req.body;
  let errors = [];

  //validate filds
  if (!username) {
    errors.push({ text: 'Please add username' });
  }
  if (!username) {
    errors.push({ text: 'Please add email' });
  }

  //check for errors
  if (errors.length > 0) {
    res.json({
      errors,
      username,
      email
    });
  } else {
    console.log("Served Req user", req.body.username);
    //insert into table
    User.create({
      username,
      email
    })
      .then(user => res.json([{newuser: user}]))
      .catch(err => console.log(err));
  }
});

module.exports = router;
