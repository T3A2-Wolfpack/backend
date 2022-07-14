const express = require("express");

const {
  tasting_create
} = require("../controllers/tastingController");

const router = express.Router();

// GET all whiskeys
// router.get("/", whiskey_index);

// GET a single whiskey
// router.get("/:id", whiskey_details);

// POST a new whiskey
router.post("/", tasting_create);

module.exports = router;
