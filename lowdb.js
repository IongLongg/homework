const rp = require('request-promise')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const gamesOptions = {
    url: "https://free-nba.p.rapidapi.com/games",
    headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "a6b3fd5546msh074de9a1a38a16ap16d5bcjsn75a46a51e0d0",
        useQueryString: true,
    },
    json : true
};

const teamsOptions = {
    url: "https://free-nba.p.rapidapi.com/teams",
    headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "a6b3fd5546msh074de9a1a38a16ap16d5bcjsn75a46a51e0d0",
        useQueryString: true,
    },
    json : true
}

const playerOptions = {
    url: "https://free-nba.p.rapidapi.com/players",
    headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "a6b3fd5546msh074de9a1a38a16ap16d5bcjsn75a46a51e0d0",
        useQueryString: true,
    },
    json : true
}

const createOptions = (opt) => {
    switch(opt){
        case 'gipphys':
            return gipphyOptions
        case 'games':
            return gamesOptions
        case 'players':
            return playerOptions
        case 'teams':
            return teamsOptions
    }
}

const list = ['teams', 'players', 'games']

list.map(opt => {
    rp(createOptions(opt))
        .then(body => db.set(opt, body.data).write())
        .catch(err => console.log('Failed !!!', err))
})

module.exports = db