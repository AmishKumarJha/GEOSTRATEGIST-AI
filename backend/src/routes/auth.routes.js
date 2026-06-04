const express =
  require("express");

const router =
  express.Router();

const {
  register,
  login,
  me,
} = require(
  "../controllers/auth.controller"
);
const authMiddleware =
  require("../middleware/auth");

router.get(
  "/me",
  authMiddleware,
  me
);


router.post(
  "/register",
  register
);

router.post(
  "/login",
  login
);

module.exports = router;