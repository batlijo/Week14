var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //request for post to parse back whatever the body is to be able to use it
// all requests and responses will have headers and will always have the same format, we are bootstrapping our application
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "santal33!",
  database: "task_saver_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route, go to your database and run that query and if you get an error it will tell you what the error is and renders the object to the database to the index view
app.get("/", function(req, res) {
  connection.query("SELECT * FROM tasks;", function(err, data) {
    if (err) throw err;


    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // return res.send(data);

    res.render("index", { tasks: data });
  });
});

// Post route -> back to home, now going to post onto the index...
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // return res.send('You sent, ' + req.body.task);

  connection.query("INSERT INTO tasks (task) VALUES (?)",
  [req.body.task], function(err, result) {
    if (err) throw err;
    //if no error it will redirect back to the index. if you do get an error you need to close the connection.
    //you have limited amount of connections you can make on your computer. be mindful of closing database connections ASAP
    app.post("/", function(req, res) {
    res.redirect("/"); //redirect to the route directory
  });
});

app.listen(port);
