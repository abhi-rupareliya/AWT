const Personalinfo = require("../Models/Personalinfo");

const getPersonalinfo = async (req, res) => {
  try {
    const personalinfo = await Personalinfo.find();
    res.status(200).json({ personalinfo });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPersonalinfo = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newPersonalinfo = new Personalinfo({ name, age, email });
    await newPersonalinfo.save();
    res.status(201).json(newPersonalinfo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePersonalinfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email } = req.body;
    const updatedPersonalinfo = { name, age, email, _id: id };
    await Personalinfo.findByIdAndUpdate(id, updatedPersonalinfo, {
      new: true,
    });
    res.json(updatedPersonalinfo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deletePersonalinfo = async (req, res) => {
  try {
    const { id } = req.params;
    await Personalinfo.findByIdAndDelete(id);
    res.json({ message: "deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getPersonalinfo,
  createPersonalinfo,
  updatePersonalinfo,
  deletePersonalinfo,
};
