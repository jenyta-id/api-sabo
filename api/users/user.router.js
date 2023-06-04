const { createUser, login, getUserByUserId, getUsers, getColumnCctvOptions, updateUsers, deleteUser } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/createUser", createUser);
router.post("/login", login);
router.put("/update", checkToken, updateUsers);
router.get("/cctvLocation", getColumnCctvOptions);
router.get("/:id", checkToken, getUserByUserId);
router.get("/", checkToken, getUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;
