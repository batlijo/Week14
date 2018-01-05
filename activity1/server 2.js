var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/:id", function (req,res){
  connection.query("SELECT * FROM quotes where id = ?", [req.params.id], function (err,data){
    if(err){
      return res.status(500).end();
    }
    console.log(data);
    res.render("single-quote", data[0]);
  });
});

// app.post("/api/quotes", function (req,res){
  connection.query("INSERT INTO quotes (author, quote) VALUES (?,?)", [req.body.author, ////)
})

// app.delete("/api/quotes/:id", function (req, res))


// app.put  if else statement



"UPDATE quotes SET author = ?, quote = ? WHERE id = ?"








// Express and MySQL code should go here.

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
