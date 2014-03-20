'use strict';

var Candle = function(name, content) {
  this.date = new Date();
  this.name = name;
  this.content = content;
};

var candles = [
  new Candle("משה לוי", "מתגעגע מאוד"),
  new Candle("אורטל לוי", "זהו מלל קצת יותר ארוך כדי לראות מה המצב כאן"),
  new Candle("שרית שינבוים", "זהו מלל קצת יותר ארוך כדי לראות מה המצב כאן"),
  new Candle("אושרת סיבוני", "זהו מלל קצת יותר ארוך כדי לראות מה המצב כאן"),
  new Candle("אדיר זריהן", "זהו מלל קצת יותר ארוך כדי לראות מה המצב כאן"),
  new Candle("שחר צוקרמן", "זהו מלל קצת יותר ארוך כדי לראות מה המצב כאן"),
  new Candle("שגית גורטלר", "זהו מלל קצת יותר ארוך כדי לראות מה המצב כאן"),
  new Candle("אסא עזרן", "זהו מלל קצת יותר ארוך כדי לראות מה המצב כאן"),
];

exports.getCandles = function(req, res) {
  res.json(candles);
};

exports.addCandle = function(req, res) {
  var candle = new Candle(req.body.name, req.body.content);
  candles.push(candle);
  res.json(candle);
};