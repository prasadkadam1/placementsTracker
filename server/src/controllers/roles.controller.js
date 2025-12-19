const { readData, writeData } = require("../utils/readWriteJson");

// GET all roles
const getAllroles = (req, res) => {
  const data = readData();
  res.json(data.job_roles);
};

// GET role by ID
const getroleById = (req, res) => {
  const data = readData();
  const role = data.roles.find(
    s => s.role_id === req.params.id
  );

  if (!role) {
    return res.status(404).json({ message: "role not found" });
  }

  res.json(role);
};

// CREATE role
const createrole = (req, res) => {
  const data = readData();

  const newrole = {
    ...req.body,
    role_id: `STU${Date.now()}`
  };

  data.roles.push(newrole);
  writeData(data);

  res.status(201).json(newrole);
};

// UPDATE role
const updaterole = (req, res) => {
  const data = readData();
  const index = data.roles.findIndex(
    s => s.role_id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({ message: "role not found" });
  }

  data.roles[index] = {
    ...data.roles[index],
    ...req.body
  };

  writeData(data);
  res.json(data.roles[index]);
};

// DELETE role
const deleterole = (req, res) => {
  const data = readData();
  data.roles = data.roles.filter(
    s => s.role_id !== req.params.id
  );

  writeData(data);
  res.json({ message: "role deleted successfully" });
};

module.exports = {
  getAllroles,
  getroleById,
  createrole,
  updaterole,
  deleterole
};
