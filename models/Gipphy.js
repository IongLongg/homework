class Gipphy{
    constructor(gif){
        this.gif = gif
    }

    get info(){
        return {
            'Id' : this.gif.id,
            'Url' : this.gif.url,
            'Title' : this.gif.title,
            'Rating' : this.gif.rating
        }
    }
}

module.exports = Gipphy;