var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res){
	db.Burgers.findAll({
		include: [db.Eater]
	}).then(function(data){
		var hbsObject = { burgers: data};
		res.render('index', hbsObject);
	}).catch(function(err){
		console.log(err);
	});
});

router.post('/index/create', function(req, res){
	db.Burgers.create({
			burger_name: req.body.burger_name,
		}).then(function(data){
			console.log("added burger");
			res.redirect('/');
		}).catch(function(err){
			console.log(err);
		});
});

router.put('/index/update/:id', function(req, res){
	db.Eater.create({
		eater: req.body.eater,
		id: req.params.id
	}, {
		where: {id : req.params.id}
	}).then(function(data){
		console.log("eater updated: " + req.body.eater);
	}).catch(function(err){
		console.log(err);
	});

	db.Burgers.update({
			devoured: true,
			id: req.params.id
		},
		{
			where: {id : req.params.id}
		}).then(function(data){
			res.redirect('/');
		}).catch(function(err){
			console.log(err);
		});
	
});

module.exports = router;