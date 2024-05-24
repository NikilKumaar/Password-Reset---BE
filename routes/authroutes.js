const {
  resetPassword,
  forgotPassword,
  registerUser,
} = require("../controllers/authcontroller");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = {
  router,
};
