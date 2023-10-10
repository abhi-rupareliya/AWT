const express = require("express");
const {
  getCourse,
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("./Controllers/Course.controller");
const app = express();

// connect to database
require("./Database/Config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", getCourses);
app.get("/:id", getCourse);
app.post("/", addCourse);
app.put("/:id", updateCourse);
app.delete("/:id", deleteCourse);

// listen to port
app.listen(3000, () => {
  console.log("Server listening: http://localhost:3000");
});
