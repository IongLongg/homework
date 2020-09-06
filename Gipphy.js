const { timeEnd } = require("console");

class Gipphy{
    constructor(id, url, title, rating){
        this.id = id;
        this.url = url;
        this.title = title;
        this.rating = rating;
    }

    get info(){
        return {
            id : this.id,
            url : this.url,
            title : this.title,
            rating : this.rating
        }
    }
}

module.exports = Gipphy;