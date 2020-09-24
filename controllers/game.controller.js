const db = require('../lowdb')

module.exports.index = (req, res) => {
    const games = db.get('games').value()
    res.json(games)
}