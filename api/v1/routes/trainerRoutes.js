const express = require("express");
const trainerController = require("../../../src/controllers/trainerController");

const router = express.Router();

router.get("/", trainerController.getAllTrainers);

router.get("/:trainerId", trainerController.getTrainerById);

router.post("/", trainerController.createTrainer);

router.put("/:trainerId", trainerController.updateTrainer);

router.delete("/:trainerId", trainerController.deleteTrainer);

module.exports = router;
