const express = require("express");
const pokemonController = require("../../controllers/pokemonController");

const router = express.Router();

router.get("/", pokemonController.getAllPokemons);

router.get("/:pokemonId", pokemonController.getPokemonById);

module.exports = router;
