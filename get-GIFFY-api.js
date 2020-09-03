const request = require("request");
const qs = require("querystring");

const options = {
    url:"http://api.giphy.com/v1/gifs/search?" +
        qs.stringify({
            api_key: "FAsOymm1vhrJxGUPfHsrOBahh3qrdkqh",
            q: "cheeseburgers",
            limit: 10,
        }),
};

request(options, (error, response, body) => {
    const data = JSON.parse(body).data;
    console.log(
        data.map((item) => {
        return {
            id: item.id,
            url: item.url,
            title: item.title,
            rating: item.rating,
        };
        })
    );
});
