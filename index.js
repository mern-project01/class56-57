// useing chatgpt
const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

const users = [
  {
    id: 1,
    name: "Sahadat",
    email: "sahadat@gmail..com",
    age: 21,
    qualification: "hsc",
  },
  {
    id: 2,
    name: "Shohel",
    email: "shohel@gmail.com",
    age: 22,
    qualification: "full stack devoloper",
  },
  {
    id: 3,
    name: "jubayer",
    email: "juba@gmail.com",
    age: 6,
    qualification: "none",
  },
  {
    id: 4,
    name: "alamine",
    email: "alamin@gmail.com",
    age: 14,
    qualification: "jsc",
  },
];
//for cors police
app.use(cors());
//midile ware
app.use(express.json());
//Route to get users
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/users/:id", (req, res) => {
  const searchId = parseInt(req.params.id);
  const foundUser = users.find((user) => user.id === searchId) || {};
  res.send(foundUser);
});
app.post("/users", (req, res) => {
  // console.log(req.body);
  // console.log("backend hited")

  const user = req.body;
  user.id = users.length + 1;
  const result = users.push(user);
  res.send(result);
});

// Route for root
app.get("/", (req, res) => {
  res.send("hello, this is Sahadat");
});

// Start the server
app.listen(port, () => {
  console.log(`myapp listening on port ${port}`);
});
