const { readData, writeData } = require("../utils/readWriteJson");

// GET all students
const getAllStudents = (req, res) => {
  const data = readData();
  res.json(data.students);
};

// GET student by ID
const getStudentById = (req, res) => {
  const data = readData();
  const student = data.students.find(
    s => s.student_id === req.params.id
  );

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
};

// CREATE student
const createStudent = (req, res) => {
  const data = readData();

  const newStudent = {
    ...req.body,
    student_id: `STU${Date.now()}`
  };

  data.students.push(newStudent);
  writeData(data);

  res.status(201).json(newStudent);
};

// UPDATE student
const updateStudent = (req, res) => {
  const data = readData();
  const index = data.students.findIndex(
    s => s.student_id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students[index] = {
    ...data.students[index],
    ...req.body
  };

  writeData(data);
  res.json(data.students[index]);
};

// DELETE student
const deleteStudent = (req, res) => {
  const data = readData();
  data.students = data.students.filter(
    s => s.student_id !== req.params.id
  );

  writeData(data);
  res.json({ message: "Student deleted successfully" });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
