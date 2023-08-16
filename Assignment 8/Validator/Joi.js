const express = require("express");
const Joi = require("joi");
const bodyParser = require("body-parser");

const app = express();
const port = 6000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to Joi Validation Example");
});

const validateSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Name is required" }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email",
    "any.required": "Email is required",
  }),
  password: Joi.string()
    .min(6)
    .pattern(
      new RegExp(
        '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$'
      )
    )
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters",
      "string.pattern.base": "Invalid password format",
      "any.required": "Password is required",
    }),
  mobile: Joi.string()
    .pattern(/^(?:\+91|91|0)?[56789]\d{9}$/)
    .pattern(/^(?:\+1)?[2-9]\d{2}[2-9](?!11)\d{6}$/)
    .required()
    .messages({
      "string.pattern.base": "Invalid mobile number",
      "any.required": "Mobile number is required",
    }),
  dob: Joi.date().iso().required().messages({
    "date.iso": "Invalid date of birth",
    "any.required": "Date of birth is required",
  }),
});

app.post("/validate", (req, res) => {
  const { error, value } = validateSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((detail) => ({ message: detail.message }));
    return res.status(422).json({ errors });
  }

  // If validation passes, process the data here
  const { name, email, password, mobile, dob } = value;
  res.json({
    message: "Validation passed!",
    data: { name, email, mobile, dob },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
