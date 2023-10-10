const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.urlencoded({ extended: true }));

// Joi schema for validation
const schema = Joi.object({
  university: Joi.string()
    // .message("Should be string")
    .min(5)
    .required()
    .message("Minimum 5 characters are required in University"),
  institute: Joi.string()
    // .message("Should be string")
    .min(3)
    .required()
    .message("Minimum 3 characters are required in Institute"),
  department: Joi.string().required().message("Department is required"),
  courseName: Joi.string()
    .min(3)
    .required()
    .message("Minimum 3 characters are required in Course Name"),
  courseCode: Joi.string().min(3).required(),
  semester: Joi.number()
    // .message("Should be number")
    .required()
    .message("Semester is required"),
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/CoursePage.html");
});

app.post("/course", (req, res) => {
  const {
    university,
    institute,
    department,
    courseName,
    courseCode,
    semester,
  } = req.body;

  // validate fields using joi
  const result = schema.validate(req.body);
  console.log(result);

  // if validation fails, send error message
  if (result.error) {
    res.status(400).send(result.error.message);
    return;
  }

  res.send(
    `<h1>Course Details</h1>
    <p>University: ${university}</p>
    <p>Institute: ${institute}</p>
    <p>Department: ${department}</p>
    <p>Course Name: ${courseName}</p>
    <p>Course Code: ${courseCode}</p>
    <p>Semester: ${semester}</p>`
  );
});

app.listen(3000, () => {
  console.log("Server listing. http://localhost:3000");
});
