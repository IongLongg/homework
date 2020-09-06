class PlayersNBA{
    constructor(id, first_name, height_feet, height_inches, last_name, position, team, weight_pounds){
        this.id = id;
        this.first_name = first_name;
        this.height_feet = height_feet;
        this.height_inches = height_inches;
        this.last_name = last_name;
        this.position = position;
        this.team = team;
        this.weight_pounds = weight_pounds;
    }

    get info(){
        return {
            "Id": this.id,
            "Full name": `${this.first_name} ${this.last_name}` ,
            "Height feet": this.height_feet,
            "Height inches": this.height_inches,
            "Position": this.position,
            "Team": `${this.team.full_name}`,
            "Weight pounds": this.weight_pounds
        }
    }
}

module.exports = PlayersNBA;