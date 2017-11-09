// Iteration #1

const Celebrity = require("../models/celebrity").Celebrity;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/movies-dev");

const celebrityData = [
  {
    name: "Clint Eastwood",
    occupation: "Actor",
    catchPhrase: "Boom Boom Baby!"
  },
  {
    name: "Coen",
    occupation: "Director",
    catchPhrase: "No Country for Old Men!"
  },
  { name: "Will Ferrell", occupation: "Comedian", catchPhrase: "Bitch Please!" }
];

celebrityData.forEach((el, ix) => {
  Celebrity.create(el, (err, celebrity) => {
    if (err) {
      return handleError(err);
    }
  });
});

mongoose.disconnect();
