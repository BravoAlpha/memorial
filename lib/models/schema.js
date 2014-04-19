var pg = require('pg');
var connectionString = process.env.DATABASE_URL;
var client;
var query;

client = new pg.Client(connectionString);
client.connect();
client.query('CREATE TABLE candles (date timestamp with time zone, name varchar(25), content varchar(100))');
client.query('CREATE TABLE eulogies (date timestamp with time zone, name varchar(25), content varchar(2000))');
client.on('drain', function() { client.end(); });