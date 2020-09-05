const request = require("request");
const qs = require("querystring");
const Gipphy = require("./Gipphy");
const GamesNBA = require('./GamesNBA')

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
    console.log(
        data.map((item) => new Gipphy(item.id, item.url, item.title, item.rating))
    );
};

const gameCallback = (err, res, body) => {
    const data = JSON.parse(body).data;
    console.log( data.map( (match) => {
        const game = new GamesNBA(
            match.date,
            match.home_team,
            match.home_team_score,
            match.visitor_team,
            match.visitor_team_score,
            match.status,
            match.season
        )
        return game.info
    })
    );
};

const getGifAPI = () => {
    request(gifOptions, gifCallback);
};

const getGameAPI = () => {
    request(gamesOptions, gameCallback);
};

getGameAPI();
