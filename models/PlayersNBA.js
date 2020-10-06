const mongoose = require('mongoose')



const playerSchema = new mongoose.Schema({
    _id : Number,
    first_name: String,
    height_feet: Number,
    height_inches: Number,
    last_name: String,
    position: String,
    team : {
        _id: Number,
        abbreviation: String,
        city: String,
        conference: String,
        division: String,
        full_name: String,
        name: String
    },
    weight_pounds: Number
})

const Player = mongoose.model('Player', playerSchema, 'players')

module.exports = Player
