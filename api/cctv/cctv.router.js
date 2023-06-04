const { createCctv, updateCctv, deleteCctv, getUserByCctvLocation, getLocationCctv, getCctvByCctvId, getCctvs } = require("./cctv.controller");
const router = require("express").Router();
// const { checkToken } = require("../../auth/token_validation");

// router.post("/", checkToken, createCctv);
// router.get("/:id", checkToken, getCctvByCctvId);
// router.get("/", checkToken, getCctvs);
// router.patch("/", checkToken, updateCctv);
// router.delete("/", checkToken, deleteCctv);

router.post("/create", createCctv);
router.put("/update", updateCctv);
router.delete("/delete", deleteCctv);
router.get("/userscctv", getUserByCctvLocation);
router.get("/getlocation", getLocationCctv);
router.get("/:id", getCctvByCctvId);
router.get("/", getCctvs);

module.exports = router;