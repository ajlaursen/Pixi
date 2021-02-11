const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/<MODEL_NAME_HERE>"
);

const seed = [
  {
   
  }
];

db.<MODEL_NAME_HERE>
  .remove({})
  .then(() => db.<MODEL_NAME_HERE>.collection.insertMany(<MODEL_NAME_HERE>Seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
