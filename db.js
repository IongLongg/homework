const config = require('./nba-migrations/migrate-mongo-config');

const db = require('mongodb').MongoClient.connect('mongodb://localhost:27017/')

module.exports = db.then(db => db.db('nba'))
