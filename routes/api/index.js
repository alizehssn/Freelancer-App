const router = require("express").Router();
const jobRoutes = require("./jobRoutes");
router.use("/jobs", jobRoutes);
module.exports = router