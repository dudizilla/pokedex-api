const pokemons = require("../database/Pokemon");
const { z } = require("zod");

const PokemonSchema = z.object({
  name: z.string(),
  id: z.number(),
  type: z.string().array(),
  ability: z.string().array(),
  image: z.string(),
  base: z.object({
    hp: z.number(),
    attack: z.number(),
    defense: z.number(),
    sp_attack: z.number(),
    sp_defense: z.number(),
    speed: z.number(),
  }),
});

const getAllPokemons = async () => {
  const allPokemons = await pokemons.getAllPokemons(); 
  sortedPokemons = allPokemons.sort((a, b) => a.id - b.id);

  const sanitizedPokemons = sortedPokemons.map((pokemon) =>
    PokemonSchema.parse(pokemon)
  )
  return sanitizedPokemons;
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
