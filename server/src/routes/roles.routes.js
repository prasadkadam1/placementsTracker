const express = require("express");
const router = express.Router();
const {
  getAllroles,
  getroleById,
  createrole,
  updaterole,
  deleterole
} = require("../controllers/roles.controller");

router.get("/", getAllroles);
router.get("/:id", getroleById);
router.post("/", createrole);
router.put("/:id", updaterole);
router.delete("/:id", deleterole);

module.exports = router;
