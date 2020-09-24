const db = require('../lowdb')

module.exports.index = (req, res) => {
    const players = db.get('players').value()
    res.json(players)
}