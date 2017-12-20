// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

var PORT = 3002;


// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here


  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  app.get("/:operation/:digitOne/:digitTwo", function(req, res) {
    res.send("Welcome to Batli's Calculator!");
    const operation = req.params.operation;
    const digitOne = parseInt(req.params.digitOne);
    const digitTwo = parseInt(req.params.digitTwo);
    let result;
  });

  {
    // What does this log?


  // Initialize the result variable to send later
  //var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      // Add your logic here. Pun intended.
      result = digitOne + digitTwo;
      break;
    case "subtract":
      // Subtract logic
      break;
    case "multiply":
      // Multiply
      break;
    case "divide":
      // Divide
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  };

  // We return the result back to the user in the form of a string
  res.send(result.toString());

};

// Initiate the listener.
app.listen(3002, function() {
  console.log("App listening on PORT " + 3002);
});
