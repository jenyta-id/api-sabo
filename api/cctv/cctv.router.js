const { createCctv, getCctvByCctvId, getCctvs, updateCctv, deleteCctv } = require("./cctv.controller");
const router = require("express").Router();
// const { checkToken } = require("../../auth/token_validation");

// router.post("/", checkToken, createCctv);
// router.get("/:id", checkToken, getCctvByCctvId);
// router.get("/", checkToken, getCctvs);
// router.patch("/", checkToken, updateCctv);
// router.delete("/", checkToken, deleteCctv);

router.post("/create", createCctv);
router.get("/:id", getCctvByCctvId);
router.get("/", getCctvs);
router.patch("/update", updateCctv);
router.delete("/delete", deleteCctv);

module.exports = router;
