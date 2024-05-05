const express = require("express");
require("dotenv").config();
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleWare");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);

module.exports = router;
