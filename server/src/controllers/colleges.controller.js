const { readData, writeData } = require("../utils/readWriteJson");

// GET all colleges
const getAllcolleges = (req, res) => {
  const data = readData();
  res.json(data.colleges);
};

// GET college by ID
const getcollegeById = (req, res) => {
  const data = readData();
  const college = data.colleges.find(
    s => s.college_id === req.params.id
  );

  if (!college) {
    return res.status(404).json({ message: "college not found" });
  }

  res.json(college);
};

// CREATE college
const createcollege = (req, res) => {
  const data = readData();

  const newcollege = {
    ...req.body,
    college_id: `STU${Date.now()}`
  };

  data.colleges.push(newcollege);
  writeData(data);

  res.status(201).json(newcollege);
};

// UPDATE college
const updatecollege = (req, res) => {
  const data = readData();
  const index = data.colleges.findIndex(
    s => s.college_id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({ message: "college not found" });
  }

  data.colleges[index] = {
    ...data.colleges[index],
    ...req.body
  };

  writeData(data);
  res.json(data.colleges[index]);
};

// DELETE college
const deletecollege = (req, res) => {
  const data = readData();
  data.colleges = data.colleges.filter(
    s => s.college_id !== req.params.id
  );

  writeData(data);
  res.json({ message: "college deleted successfully" });
};

module.exports = {
  getAllcolleges,
  getcollegeById,
  createcollege,
  updatecollege,
  deletecollege
};
