const express = require("express");

let app = express();

// require('dotenv').config()
//const helmet = require("helmet");
//const bodyParser = require("body-parser");
//const cors = require("cors");
//const morgan = require("morgan");
/*
var db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "",
    password: "",
    database: "my-app"
  }
});


*/

/*
const main = require("./controllers/main");

const whitelist = ["http://localhost:3001"];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS "));
    }
  }
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(boodyParser.json());
app.use(morgan("combined"));

app.get("/", (req, res) => res.send("hello world"));
app.get("/crud", (req, res) => main.getTableData(req, res, db));
//app.post("/crud", (req, res) => main.postTableData(req, res, db));

console.log("Yes");



app.put("/crud", (req, res) => main.putTableData(req, res, db));

app.delete("/crud", (req, res) => main.deleteTable(req, res, db));

//App Server Connection
app.listem(3001, () => {
  console.log(`app is running on port ${process.env.PORT || 3001}`);
});


*/

// console.log("We are testing");
// app.post("/crud", function(req, res) {
//   console.log("We are inserting in the database");
// });

// app.listen(3001, () => {
//   console.log(`app is running on port ${process.env.PORT || 3001}`);
// });
