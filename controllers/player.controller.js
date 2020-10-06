const Player = require('../models/PlayersNBA')

module.exports.index = async (req, res) => {
    const players = await Player.find().exec()
    res.json(players)
}