const request = require("request");
const qs = require("querystring");
const argv = require('yargs').argv;

const Gipphy = require("./Gipphy");
const GamesNBA = require('./GamesNBA');

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
};

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

const fetchAPI = () => {
    if(argv._[0] === 'nba'){
        request(gamesOptions, gameCallback);
    } 
    else if(argv._[0] === 'gipphy')
        request(gifOptions, gifCallback);
    else    
        console.log("Not found");
}

fetchAPI();
