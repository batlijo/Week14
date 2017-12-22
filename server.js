const express = require("express");
const app = express();
const port = 3000;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); //this is called bootstrapping our app to take advantage of some of the dependancies we've installed

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  // 1. Send the dog object from the animals array to the dog.handlebars file.
    const dog = animals.find(e --> e.animalType === "dog")
    res.render("dog", dog);
  });


app.get("/all-pets", function(req, res) {
  var data = {
    anims: animals.filter(x--> !x.pet)
  };
    res.render("index", data);
  }// Handlebars requires an object to be sent to the index.handlebars file.

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.

});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
var data = {
  anims. animmals.filter(x--> !xx.pet)
};
  // 3. Send all the animals that are not pets to the index.handlebars file.

});

app.listen(port);
