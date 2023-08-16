const express = require("express");
const { authenticateUser } = require("./Middlewares/AuthMiddleware");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Pages/Login.html");
});

app.post("/login", authenticateUser, (req, res) => {
  res.sendFile(__dirname + "/Pages/Display.html");
});

app.listen(4000, () => {
  console.log("Serever listening on port 4000.");
});
