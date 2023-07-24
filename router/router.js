// const router = require("express").Router()
const router = require("express").Router()

const {Register, Login} = require("../controller/reg")

router.route("/reg").post(Register)
router.route("/login").post(Login)

// router.route("/reg").post(Regsister)

module.exports = router