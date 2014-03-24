'use strict';

var candles = require('../models/candles');

exports.getCandles = function(req, res) {
  candles.getAll(function(error, candles) {
    if (error){
      res.end(500);
    } else {
      res.json(candles);
    }
  });
};

exports.addCandle = function(req, res) {
  var candle = new candles.Candle(req.body.name, req.body.content);
  candles.add(candle, function(error, candle) {
    if (error){
      res.end(500);
    } else {
      res.json(candle);
    }
  });
};