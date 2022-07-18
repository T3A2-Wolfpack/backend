const express = require("express");

const {
  user_index,
} = require("../controllers/userController");

const router = express.Router({ mergeParams: true });

// GET all users
router.get("/", user_index);


module.exports = router;
