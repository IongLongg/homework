const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    _id : Number,
    date : Date,
    home_team : {
        _id : Number,
        abbreviation : String,
        city : String,
        conference : String,
        division : String,
        full_name : String,
        name : String
    },
    home_team_score : Number,
    period : Number,
    season : Number,
    status : String,
    time : String,
    visited_team : {
        _id : Number,
        abbreviation : String,
        city : String,
        conference : String,
        division : String,
        full_name : String,
        name : String
    },
    visited_team_score : Number
})

const Game = mongoose.model('Game', gameSchema, 'games')

module.exports = Game
