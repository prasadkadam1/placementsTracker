const { readData, writeData } = require("../utils/readWriteJson");

// GET all companies
const getAllcompanies = (req, res) => {
  const data = readData();
  res.json(data.companies);
};

// GET companie by ID
const getcompanieById = (req, res) => {
  const data = readData();
  const companie = data.companies.find(
    s => s.companie_id === req.params.id
  );

  if (!companie) {
    return res.status(404).json({ message: "companie not found" });
  }

  res.json(companie);
};

// CREATE companie
const createcompanie = (req, res) => {
  const data = readData();

  const newcompanie = {
    ...req.body,
    companie_id: `STU${Date.now()}`
  };

  data.companies.push(newcompanie);
  writeData(data);

  res.status(201).json(newcompanie);
};

// UPDATE companie
const updatecompanie = (req, res) => {
  const data = readData();
  const index = data.companies.findIndex(
    s => s.companie_id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({ message: "companie not found" });
  }

  data.companies[index] = {
    ...data.companies[index],
    ...req.body
  };

  writeData(data);
  res.json(data.companies[index]);
};

// DELETE companie
const deletecompanie = (req, res) => {
  const data = readData();
  data.companies = data.companies.filter(
    s => s.companie_id !== req.params.id
  );

  writeData(data);
  res.json({ message: "companie deleted successfully" });
};

module.exports = {
  getAllcompanies,
  getcompanieById,
  createcompanie,
  updatecompanie,
  deletecompanie
};
