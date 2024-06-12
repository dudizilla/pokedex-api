const trainerService = require("../services/trainerService");

const getAllTrainers = (req, res) => {
  const allTrainers = trainerService.getAllTrainers();
  res.send("OK", allTrainers);
};

const getTrainerById = (req, res) => {
  const {
    params: { trainerId },
  } = req;

  if (!trainerId) {
    res.status(400).send({ status: "Error", message: "Trainer ID is required" });
    return;
  }

  try {
    const result = trainerService.getTrainerById(trainerId);

    if (!result) {
      res.status(404).send({ status: "Error", message: "Trainer not found" });
      return;
    }

    const { name, lastname, email, pokemons, id } = result;

    const trainer = {
      name,
      lastname,
      email,
      pokemons,
      id
    };

    res.send({ status: "OK", data: trainer });
  } catch (error) {
    res.status(500).send({ status: "Error", message: "An error occurred while fetching the Trainer" });
  }
};

const createTrainer = (req, res) => {
  const { body } = req;
  if (!body.name || !body.lastname || !body.email) {
    res.status(400).send({ status: "Error", message: "One of the following keys is missing or is empty in request body: 'name', 'lastname', 'email'" });
    return;
  }
  const newTrainer = {
    name: body.name,
    lastname: body.lastname,
    email: body.email,
  };

  try {
    const createdTrainer = trainerService.createTrainer(newTrainer);
    res.status(201).send({ status: "OK", data: createdTrainer });
  } catch (error) {
    res
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateTrainer = (req, res) => {
  const {
    params: { trainerId },
  } = req;

  const updatedTrainer = req.body;

  trainerService.updateTrainer(trainerId, updatedTrainer);
  res.send("Update a trainer by id");
};

const deleteTrainer = (req, res) => {
  const {
    params: { trainerId },
  } = req;

  trainerService.deleteTrainer(trainerId);
};

module.exports = {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
};