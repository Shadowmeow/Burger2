var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	res.redirect("/index");
});

router.get("/index", function(req, res) {
	burger.selectAll(function(data) {
		var burger = {burgers: data};
		console.log(burger);
		res.render("index", burger);
	});
});


router.post("/burgers/insert", function(req, res) {
	burger.insert(["burger_name", "devoured"], [req.body.name, false], function() {
		res.redirect("/index");
	});
});

router.put("/burgers/update/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.update({devoured: req.body.devoured}, condition, function() {
		res.redirect("/index");
	});
});

module.exports = router;