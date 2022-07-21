const express = require("express");

const {
  whiskey_create,
  whiskey_details,
  whiskey_index,
  whiskey_delete,
  whiskey_update,
  tastings_index,
} = require("../controllers/whiskeyController");

const router = express.Router();

// GET all whiskeys
router.get("/", whiskey_index);

// GET a single whiskey
router.get("/:id", whiskey_details);

// POST a new whiskey
router.post("/", whiskey_create);

// DELETE a whiskey
router.delete("/:id", whiskey_delete);

// UPDATE a whiskey
router.patch("/:id", whiskey_update);

// GET all the tastings
router.get("/:id/tastings", tastings_index);

module.exports = router;