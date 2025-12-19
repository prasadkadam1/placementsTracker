const express = require("express");
const router = express.Router();
const {
  getAllcompanies,
  getcompanieById,
  createcompanie,
  updatecompanie,
  deletecompanie
} = require("../controllers/companies.controller");

router.get("/", getAllcompanies);
router.get("/:id", getcompanieById);
router.post("/", createcompanie);
router.put("/:id", updatecompanie);
router.delete("/:id", deletecompanie);

module.exports = router;
