const { timeEnd } = require("console");

class Gipphy{
    constructor(id, url, title, rating){
        this.id = id;
        this.url = url;
        this.title = title;
        this.rating = rating;
    }
}

module.exports = Gipphy;