const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
router.use("/api", apiRoutes);
router.use((request, response)=> {
    response.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router
