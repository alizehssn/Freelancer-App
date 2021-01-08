const router = require("express").Router();
const JobController = require("../../controllers/JobController");
//from the controller
router.route("/")
.get(JobController.findAll)
.post(JobController.create)
module.exports = router;
