const { MongoClient } = require("mongodb");
const uri = require("../../atlas_uri");
const dotenv = require('dotenv');

dotenv.config();

const client = new MongoClient(uri);

const dbname = "poke_api";
const collection_name = "pokemon";

const pokemonsCollection = client.db(dbname).collection(collection_name);

const connectToDataBase = async () => {
  try {
    await client.connect();
    console.log("Connected to database");
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  }
}

const main = async () => {
  try {
    await connectToDataBase();
  } catch (err) {
    console.error(`Error: ${err}`);
  } finally {
    await client.close();
  }
}

main();

const getAllPokemons = async () => {
  try {
    await connectToDataBase();
    const result = await pokemonsCollection.find().toArray();
    return result;
  } catch (err) {
    console.error(`Error: ${err}`);
    throw err;
  }
};

const getPokemonById = async (pokemonId) => {
  if (!pokemonId) {
    throw new Error("Pokemon ID is required");
  }

  try {
    await connectToDataBase();
    const result = await pokemonsCollection.findOne({ id: parseInt(pokemonId) });

    if (!result) {
      throw new Error("Pokemon not found");
    }

    const { name, id, type, ability, image, base } = result;

    const pokemon = {
      name,
      id,
      type,
      ability,
      image,
      base,
    };

    return pokemon;
  } catch (err) {
    console.error(`Error: ${err}`);
    throw err;
  }
};

module.exports = {
  getAllPokemons,
  getPokemonById,
};
