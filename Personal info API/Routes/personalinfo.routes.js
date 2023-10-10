const express = require("express");

const router = express.Router();

const {
  getPersonalinfo,
  createPersonalinfo,
  updatePersonalinfo,
  deletePersonalinfo,
} = require("../Controllers/personalinfo.controller");

router.get("/", getPersonalinfo);
router.post("/", createPersonalinfo);
router.put("/:id", updatePersonalinfo);
router.delete("/:id", deletePersonalinfo);

module.exports = router;
