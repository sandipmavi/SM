const login = require("../controllers/login.js");
const register = require("../controllers/register.js");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
module.exports = router;
