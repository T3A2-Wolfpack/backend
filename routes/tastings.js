const express = require("express");

const {
  tasting_create,
  tasting_index,
  tasting_delete,
  tasting_user,
  tasting_details
} = require("../controllers/tastingController");


const router = express.Router({ mergeParams: true });

// GET all tastings
router.get("/", tasting_index);

// GET a single tasting

// router.get("/:id", whiskey_details);

router.get("/:id", tasting_details);

// GET a tasting
router.get("/:id/user", tasting_user);

// DELETE a whiskey
router.delete("/:id", tasting_delete);

// POST a new tasting
router.post("/", tasting_create);

// DELETE a tastinbg
router.delete("/:id", tasting_delete);

module.exports = router;
