
const express = require('express');
const cors = require('cors');
const app = express();

const dbConncet = require('./dbConnect');

require('dotenv').config();



app.use(cors());

dbConncet();




app.listen(process.env.PORT, () => {
  console.log(` http://${process.env.HOST}:${process.env.PORT}`)
})
