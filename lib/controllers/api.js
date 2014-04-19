'use strict';

var candles = require('../models/candles');
var eulogies = require('../models/eulogies');

exports.getCandles = function(req, res) {
  candles.getAll(function(error, candles) {
    if (error){
      res.send(500, { error: 'could not get candles' });
    } else {
      res.json(candles);
    }
  });
};

exports.addCandle = function(req, res) {
  var candle = new candles.Candle(req.body.name, req.body.content);
  candles.add(candle, function(error, candle) {
    if (error){
      res.send(500, { error: 'could not add candle' });
    } else {
      res.json(candle);
    }
  });
};

exports.getEulogies = function(req, res) {
  eulogies.getAll(function(error, eulogies) {
    if (error){
      res.send(500, { error: 'could not get eulogies' });
    } else {
      res.json(eulogies);
    }
  });
};

exports.addEulogy = function(req, res) {
  var eulogy = new eulogies.Eulogy(req.body.name, req.body.content);
  eulogies.add(eulogy, function(error, eulogy) {
    if (error){
      res.send(500, { error: 'could not add eulogies' });
    } else {
      res.json(eulogy);
    }
  });
};