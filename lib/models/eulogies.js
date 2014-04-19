'use strict';

var pg = require('pg');

exports.Eulogy = function(name, content) {
  this.date = new Date();
  this.name = name;
  this.content = content;
};

var client = new pg.Client(process.env.DATABASE_URL);
client.connect();

exports.add = function(eulogy, callback) {
	client.query(
		'INSERT INTO eulogies(date, name, content) VALUES($1, $2, $3)', 
		[eulogy.date, eulogy.name, eulogy.content], 
		function(error) {
			callback(error, eulogy);
		});
};

exports.getAll = function(callback) {
	client.query('SELECT * FROM eulogies', function (error, result) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, result.rows);
		}
	});
};