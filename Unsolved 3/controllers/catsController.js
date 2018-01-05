var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) { //get all the cats then render in index which is in handlebar views...ORM wil help you with what your intent is instead of having a bunch of code
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  cat.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({ //need to specify what we need to update so we pass it in as an object
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end(); //404 bc the resource doesn't exist
    } else {
      res.status(200).end(); //200 if resource was created successfuly
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

router.delete("/api/cats/:id", function(req, res){
  //this solution code is not completed yet
})




/* /api/cats/:id delete route,
to call the delete key of the cat model, and to pass in arguments as necessary */
