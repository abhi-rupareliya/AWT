const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/personalinfo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database..");
  })
  .catch((err) => {
    console.log(err);
  });
