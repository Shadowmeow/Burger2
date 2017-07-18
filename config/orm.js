var connection = require("../config/connection.js");

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(obj) {
	var arr = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			arr.push(key + "=" + obj[key]);
		}
	}

	return arr.toString();
}

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insert: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";

		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);
		console.log(vals);

		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	update: function(table, value, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(value);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;