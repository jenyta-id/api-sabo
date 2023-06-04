const { createUser, login, getUserByUserId, getUsers, updateUsers, deleteUser } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/createUser", createUser);
router.post("/login", login);
router.put("/update", checkToken, updateUsers);
router.get("/:id", checkToken, getUserByUserId);
router.get("/", checkToken, getUsers);
router.delete("/deleteUser", checkToken, deleteUser);

module.exports = router;
