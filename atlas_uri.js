const dotenv = require('dotenv');

dotenv.config();

module.exports = uri = 
`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.4vz3itv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`