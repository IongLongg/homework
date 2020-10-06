const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    _id: Number,
    abbreviation: String,
    city: String,
    conference: String,
    division: String,
    full_name: String,
    name: String
})

const Team = mongoose.model('Team', teamSchema, 'teams')

module.exports = Team
