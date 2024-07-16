const pokemons = require("../database/Pokemon");

const getAllPokemons = async () => {
  const allPokemons = await pokemons.getAllPokemons(); 
  sortedPokemons = allPokemons.sort((a, b) => a.id - b.id);

  return sortedPokemons;
};

const getPokemonById = async (pokemonId) => {
  if (!pokemonId) {
    throw new Error("Pokemon ID is required");
  }

  try {
    const result = await pokemons.getPokemonById(pokemonId);

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
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};

module.exports = {
  getAllPokemons,
  getPokemonById,
};
