const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  updatePerson,
} = require("../controllers/peopleController");

router.route("/").get(getPeople).post(createPerson);
router.route("/:id").put(updatePerson);

module.exports = router;
