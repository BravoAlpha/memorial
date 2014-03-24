'use strict';

var pg = require('pg');

exports.Candle = function(name, content) {
  this.date = new Date();
  this.name = name;
  this.content = content;
};

var client = new pg.Client(process.env.DATABASE_URL);
client.connect();

exports.add = function(candle, callback) {
	client.query(
		'INSERT INTO candles(date, name, content) VALUES($1, $2, $3)', 
		[candle.date, candle.name, candle.content], 
		function(error) {
			callback(error, candle);
		});
};

exports.getAll = function(callback) {
	client.query('SELECT * FROM candles', function (error, result) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, result.rows);
		}
	});
};