const express = require("express");


const {
  login,
  register,
  users_index
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", users_index);

module.exports = router;
