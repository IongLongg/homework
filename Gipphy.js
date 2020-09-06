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
            'Id' : this.id,
            'Url' : this.url,
            'Title' : this.title,
            'Rating' : this.rating
        }
    }
}

module.exports = Gipphy;