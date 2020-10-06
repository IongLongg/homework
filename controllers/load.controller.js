const rp = require('request-promise')
const mongoose = require('mongoose')
const Team = require('../models/TeamsNBA')
const Game = require('../models/GamesNBA')
const Player = require('../models/PlayersNBA')

const fetchAllNbaInfo = (options) => {
    const requests = options.map(async opt => {
        const option = {
            url: `https://free-nba.p.rapidapi.com/${opt}`,
            headers: {
                'x-rapidapi-host': 'free-nba.p.rapidapi.com',
                'x-rapidapi-key': 'a6b3fd5546msh074de9a1a38a16ap16d5bcjsn75a46a51e0d0',
                useQueryString: true
            },
            json : true
        } 
        return await rp(option)
            .then(body => {
                switch(opt){
                    case 'games': 
                        Game.insertMany(body.data)
                        break
                    case 'teams': 
                        Team.insertMany(body.data)
                        break
                    case 'players': 
                        Player.insertMany(body.data)
                        break
                }
            })
    }) 
    return Promise.all(requests)
}

module.exports.load = async (req, res) => {
    const options = ['teams', 'players', 'games']

    await fetchAllNbaInfo(options)
        .then(values => {
            res.send('Inserted !')
        })
        .catch(err => console.error(err))
}

