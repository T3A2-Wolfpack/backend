const express = require("express");

const {
  user_index,
  user_details,
  user_create,
  user_delete,
  user_update
} = require("../controllers/userController");

const router = express.Router({ mergeParams: true });

// GET all users
router.get("/", user_index);

// GET a single user
router.get("/:id", user_details);

// POST a new user
router.post("/", user_create);

// DELETE a user
router.delete("/:id", user_delete);

// UPDATE a user
router.patch("/:id", user_update);

module.exports = router;
