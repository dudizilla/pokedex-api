const express = require("express");
const pokemonController = require("../../../src/controllers/pokemonController");

const router = express.Router();

router.get("/", pokemonController.getAllPokemons);

router.get("/:pokemonId", pokemonController.getPokemonById);

module.exports = router;
