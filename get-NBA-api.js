const request = require("request");
const qs = require("querystring");

const options = {
    url: "https://free-nba.p.rapidapi.com/games?" + qs.stringify({ page : 1900 }),
    headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "a6b3fd5546msh074de9a1a38a16ap16d5bcjsn75a46a51e0d0",
        "useQueryString": true,
    }
};

request(options, (err, res, body) => {
    const data = JSON.parse(body).data;
    console.log(data.map( match => {
        return {
            date : match.date.substring(0, 10),
            home_team : match.home_team.full_name,
            home_team_score : match.home_team_score,
            visitor_team : match.visitor_team.full_name,
            visitor_team_score : match.visitor_team_score,
            status : match.status,
            season : match.season
        }
    }));
});
