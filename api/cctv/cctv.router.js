const { createCctv, updateCctv, deleteCctv, getUserByCctvLocation, getLocationCctv, getCctvByCctvId, getCctvs } = require("./cctv.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/create", checkToken, createCctv);
router.put("/update", checkToken, updateCctv);
router.delete("/delete", checkToken, deleteCctv);
router.get("/userscctv", getUserByCctvLocation);
router.get("/getlocation", getLocationCctv);
router.get("/:id", getCctvByCctvId);
router.get("/", getCctvs);

module.exports = router;