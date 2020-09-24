const db = require('../lowdb')

module.exports.index = (req, res) => {
    const teams = db.get('teams').value()
    res.json(teams)
}