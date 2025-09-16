const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { User, Question, Result } = require('./models');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mongo connected");
  app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
});
