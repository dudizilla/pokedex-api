const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pokemon API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // path to the files where you've defined your endpoints
};

const specs = swaggerJsdoc(options);

const v1PokemonRouter = require("./v1/routes/pokemonRoutes");
const v1TrainerRouter = require("./v1/routes/trainerRoutes");

const app = express();
const PORT = process.env.PORT;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/v1/pokemons", v1PokemonRouter);
app.use("/api/v1/trainers", v1TrainerRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});