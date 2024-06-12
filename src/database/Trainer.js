const { MongoClient } = require("mongodb");
const uri = require("../../atlas_uri");
const dotenv = require('dotenv');

dotenv.config();

const client = new MongoClient(uri);

const dbname = "poke_api";
const collection_name = "trainer";

const trainersCollection = client.db(dbname).collection(collection_name);

const connectToDataBase = async () => {
  try {
    await client.connect();
    console.log("Connected to database");
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  }
}

const getAllTrainers = async () => {
  try {
    const trainers = await trainersCollection.find({}).toArray();
    return trainers;
  } catch (err) {
    console.error(`Error fetching trainers: ${err}`);
    throw err;
  }
}

const getTrainerById = async (trainerId) => {
  try {
    const result = await trainersCollection.findOne({ _id: trainerId });
    if(!result) {
      throw new Error("Trainer not found");
    }

    const { name, lastname, email, pokemons, id} = result;

    const trainer = {
      name,
      lastname,
      email,
      pokemons,
      id
    };

    return trainer;
  } catch (err) {
    console.error(`Error fetching trainer: ${err}`);
    throw err;
  }
}

const createTrainer = (trainer) => {
  try {
    const result = trainersCollection.insertOne(trainer);
    return result;
  } catch (err) {
    console.error(`Error creating trainer: ${err}`);
    throw err;
  }
}

const updateTrainer = (trainerId, updatedTrainer) => {
  try {
    const result = trainersCollection.updateOne({ _id: trainerId }, { $set: updatedTrainer });
    return result;
  } catch (err) {
    console.error(`Error updating trainer: ${err}`);
    throw err;
  }
}

const deleteTrainer = (trainerId) => {
  try {
    const result = trainersCollection.deleteOne({ _id: trainerId });
    return result;
  } catch (err) {
    console.error(`Error deleting trainer: ${err}`);
    throw err;
  }
}

module.exports = {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
};
