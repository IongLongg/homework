const request = require("request");
const qs = require("querystring");
const argv = require('yargs').argv;

const Gipphy = require("./Gipphy");
const GamesNBA = require('./GamesNBA');
const TeamsNBA = require("./TeamsNBA");
const PlayersNBA = require("./PlayersNBA");

const gifOptions = {
    url:
        "http://api.giphy.com/v1/gifs/search?" +
        qs.stringify({
            api_key: "FAsOymm1vhrJxGUPfHsrOBahh3qrdkqh",
            q: "cheeseburgers",
            limit: 10,
        }),
};

const gamesOptions = {
    url: "https://free-nba.p.rapidapi.com/games?" + qs.stringify({ page: 1900 }),
    headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "a6b3fd5546msh074de9a1a38a16ap16d5bcjsn75a46a51e0d0",
        useQueryString: true,
    },
    qs: {page: '0', per_page: '25'},
};

const teamsOptions = {
    url: "https://free-nba.p.rapidapi.com/teams",
    headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "a6b3fd5546msh074de9a1a38a16ap16d5bcjsn75a46a51e0d0",
        useQueryString: true,
    },
}

const playerOptions = {
    url: "https://free-nba.p.rapidapi.com/players?" + qs.stringify({ search : 'paul'}),
    qs: {page: '0', per_page: '25'},
    headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "a6b3fd5546msh074de9a1a38a16ap16d5bcjsn75a46a51e0d0",
        useQueryString: true,
    },
}

const gifCallback = (error, response, body) => {
    const data = JSON.parse(body).data;
    const listGif = [];
    data.map((item) => {
        const gif = new Gipphy(item.id, item.url, item.title, item.rating);
        listGif.push(gif);
    })
    console.table(listGif);
};

const gameCallback = (err, res, body) => {
    const data = JSON.parse(body).data;
    const listInfo = [];
    data.map( (match) => {
        const game = new GamesNBA(
            match.date,
            match.home_team,
            match.home_team_score,
            match.visitor_team,
            match.visitor_team_score,
            match.status,
            match.season
        )
        listInfo.push(game.info);
    })
    console.table(listInfo)
};

const teamCallback = (err, res, body) => {
    const data = JSON.parse(body).data;
    const listInfo = [];
    data.map( (item) => {
        const team = new TeamsNBA(
            item.id, 
            item.abbreviation, 
            item.city, 
            item.conference, 
            item.division, 
            item.full_name, 
            item.name
        )
        listInfo.push(team.info);
    })
    console.table(listInfo)
}

const playerCallback = (err, res, body) => {
    const data = JSON.parse(body).data;
    const listInfo = [];
    data.map( (item) => {
        const player = new PlayersNBA(
            item.id,
            item.first_name,
            item.height_feet,
            item.height_inches,
            item.last_name,
            item.position,
            item.team,
            item.weight_pounds
        )
        listInfo.push(player.info);
    })
    console.table(listInfo)
};

const fetchAPI = () => {
    if(argv._[0] === 'game-nba'){
        request(gamesOptions, gameCallback);
    } 
    else if(argv._[0] === 'gipphy'){
        request(gifOptions, gifCallback);
    }
    else if(argv._[0] === 'team-nba'){
        request(teamsOptions, teamCallback);
    }
    else if(argv._[0] === 'player-nba'){
        request(playerOptions, playerCallback);
    }
    else{
        console.log("Not found");
    }
}

fetchAPI();
