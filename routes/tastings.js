const express = require("express");

const {
  tasting_create,
  tasting_index,
} = require("../controllers/tastingController");

const router = express.Router({ mergeParams: true });

// GET all whiskeys
router.get("/", tasting_index);

// GET a single whiskey
// router.get("/:id", whiskey_details);

// POST a new whiskey
router.post("/", tasting_create);

module.exports = router;
