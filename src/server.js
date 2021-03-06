const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
