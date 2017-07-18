var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var exphbs = require("express-handlebars");
var routes = require("./controller/burger-controller.js");
var PORT = process.env.PORT || 3000;
var db = require("./models");
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");

app.use("/", routes);

db.sequelize.sync({force: true}).then(function(){
	app.listen(PORT, function(){
		console.log("listenning on " + PORT);
	});
});