const express = require("express");
const { getEmpById } = require("../../controllers/employee/EmployeeAuth");
const {callCreate, getCalls, assignEnggToCall} = require("../../controllers/calls/calls")


const router = express.Router();

router.param("id", getEmpById);

// router.post("/:id/create", , isAuthenticated, unitCreate);
router.post("/:id/create", callCreate);
router.post("/:id/getAll", getCalls);
router.post("/:id/assignEngg", assignEnggToCall)

module.exports = router;