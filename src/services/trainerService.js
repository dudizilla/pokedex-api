const trainers = require("../database/Trainer");

const getAllTrainers = async() => {
  const allTrainers = await trainers.getAllTrainers();
  return allTrainers;
};

const getTrainerById = async(trainerId) => {
  if(!trainerId) {
    throw new Error("Trainer ID is required");
  }

/*
pokemons: [
  pokemon: {
    "$ref": "pokemons",
    "$id": "ObjectId("")"
  }
]
*/

  try{
    const result = await trainers.getTrainerById(trainerId);

    if(!result) {
      throw new Error("Trainer not found");
    }

    const { name, lastname, email, pokemons, id } = result;

    const trainer = {
      name,
      lastname,
      email,
      pokemons,
      id
    };

    return trainer;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};

const createTrainer = (trainer) => {
  const trainerToInsert = {
    ...trainer,
    pokemons: [],
    id: uuid(),
  };

  const createdTrainer = trainers.createTrainer(trainerToInsert);
  return createdTrainer;
};

const updateTrainer = (trainerId, updatedTrainer) => {
  if(!trainerId) {
    throw new Error("Trainer ID is required");
  }

  if(!updatedTrainer) {
    throw new Error("Updated Trainer is required");
  }

  trainers.updateTrainer(trainerId, updatedTrainer);
  return updatedTrainer;
};

const deleteTrainer = (trainerId) => {
  if(!trainerId) {
    throw new Error("Trainer ID is required");
  }
  trainers.deleteTrainer(trainerId);
};

module.exports = {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
};
