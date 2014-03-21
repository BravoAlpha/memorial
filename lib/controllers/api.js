'use strict';

var storage = require('node-persist');
storage.initSync();

var Candle = function(name, content) {
  this.date = new Date();
  this.name = name;
  this.content = content;
};

exports.getCandles = function(req, res) {
  var candles = storage.getItem('candles') || [];
  res.json(candles);
};

exports.addCandle = function(req, res) {
  var candles = storage.getItem('candles') || [];
  var candle = new Candle(req.body.name, req.body.content);
  candles.push(candle);
  storage.setItem('candles', candles);
  res.json(candle);
};