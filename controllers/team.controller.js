const Team = require('../models/TeamsNBA')

module.exports.index = async (req, res) => {
    const teams = await Team.find().exec()
    res.json(teams)
}

module.exports.getById = async (req, res) => {
    const team = await Team.find({id : parseInt(req.params.id)}).exec()
    res.send(team)
}