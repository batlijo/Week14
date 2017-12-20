


/* In this activity, you are going to be creating your own Ben and Jerry's App where users can see all of the different flavors Ben and Jerry's have to offer while also getting specific information on a flavor by searching for it within the URL.

var icecreams = [
  {name: 'vanilla', price: 10, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'greentea', price: 5, awesomeness: 7},
  {name: 'jawbreakers', price: 6, awesomeness: 2},
];
Do not use MySQL for this assignment! Use the icecreams variable above as your data. Add the variable to your server.js file.

Using handlebars and express, create a route called /icecream/:name. When the route is hit, it will display the name, price and awesomeness for that specific ice cream.

Create an /icecreams route. It will loop over all the ice creams and display them all to the user.
*/


// add dependencies

var express =

//app.engine("handlebars, exphbs({defaultLayout: "main"})); not correct syntax at the end!

var icecreams = [
  {name: 'vanilla', price: 10, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'greentea', price: 5, awesomeness: 7},
  {name: 'jawbreakers', price: 6, awesomeness: 2},
];

/icecream/:name

var iceCream = [{
  routeName: "chocolate",
  name: "choco-loco-late",
  description: "this cocoa will you make you go loco",
  price: 10,
  awesomeness: 100
},
{
routeName: "strawberry",
name: "strawberries & cream",
description: "strawberrrrrrrries and cream!",
price: 5,
awesomeness: 50
},
{
routeName: "rocky road",
name: "rocky road",
description: "this ice cream is anything but rocky, just smooth sailing your tastebuds will thank",
price: 25,
awesomeness: 100000
}];

app.get("/icecreams", function(req,res){
  res.render("index", icecreams[i]);
})
