const express = require("express");
const router = express.Router();
const {
  getAllcolleges,
  getcollegeById,
  createcollege,
  updatecollege,
  deletecollege
} = require("../controllers/colleges.controller");

router.get("/", getAllcolleges);
router.get("/:id", getcollegeById);
router.post("/", createcollege);
router.put("/:id", updatecollege);
router.delete("/:id", deletecollege);

module.exports = router;
