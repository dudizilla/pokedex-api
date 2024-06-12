const pokemonService = require("../services/pokemonService");

const getAllPokemons = async (req, res) => {
  const allPokemons = await pokemonService.getAllPokemons();
  res.send({ status: "OK", data: allPokemons})
};

const getPokemonById = async (req, res) => {
  const {
    params: { pokemonId },
  } = req;

  if (!pokemonId) {
    res.status(400).send({ status: "Error", message: "Pokemon ID is required" });
    return;
  }

  try {
    const result = await pokemonService.getPokemonById(pokemonId);

    if (!result) {
      res.status(404).send({ status: "Error", message: "Pokemon not found" });
      return;
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

    res.send({ status: "OK", data: pokemon });
  } catch (error) {
    res.status(500).send({ status: "Error", message: "An error occurred while fetching the Pokemon" });
  }
};

module.exports = {
  getAllPokemons,
  getPokemonById,
}
