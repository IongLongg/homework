const Game = require('../models/GamesNBA')

module.exports.index = async (req, res) => {
    const games = await Game.find().exec()
    res.json(games)
}