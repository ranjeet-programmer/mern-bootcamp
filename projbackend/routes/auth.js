var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "Name Should be At least 3 character").isLength({ min: 3 }),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be at least 3 character").isLength({
      min: 3,
    }),
  ],
  signup
);
router.get("/signout", signout);

module.exports = router;
