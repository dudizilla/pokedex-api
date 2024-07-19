const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
var cors = require('cors')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pokemon API',
      version: '1.0.0',
    },
  },
  apis: ['./v1/routes/*.js'], // path to the files where you've defined your endpoints
};

const specs = swaggerJsdoc(options);

const v1PokemonRouter = require("../api/v1/routes/pokemonRoutes");
const v1TrainerRouter = require("../api/v1/routes/trainerRoutes");

const app = express();
const PORT = process.env.PORT;

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.get('/', (req, res) => {
  res.json({ message: 'Pokemon API' });
})

app.use("/api/v1/pokemons", v1PokemonRouter);
app.use("/api/v1/trainers", v1TrainerRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

module.exports = app;