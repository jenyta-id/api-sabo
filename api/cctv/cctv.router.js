const { createCctv, updateCctv, deleteCctv, getUserByCctvLocation, getLocationCctv, getCctvByCctvId, getCctvs } = require("./cctv.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/create", checkToken, createCctv);
router.put("/update", checkToken, updateCctv);
router.delete("/delete", checkToken, deleteCctv);
router.get("/userscctv", getUserByCctvLocation);
router.get("/getlocation", checkToken, getLocationCctv);
router.get("/:id", checkToken, getCctvByCctvId);
router.get("/",checkToken, getCctvs);

module.exports = router;