const express = require("express");

const {
  tasting_create,
  tasting_index,
  tasting_delete
} = require("../controllers/tastingController");

const router = express.Router({ mergeParams: true });

// GET all tastings
router.get("/", tasting_index);

// GET a single whiskey
// router.get("/:id", whiskey_details);

// POST a new tasting
router.post("/", tasting_create);

// DELETE a tastinbg
router.delete("/:id", tasting_delete);

module.exports = router;
