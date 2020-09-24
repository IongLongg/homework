class PlayersNBA{
    constructor(player){
        this.player = player
    }

    get info(){
        return {
            "Id": this.player.id,
            "Full name": `${this.player.first_name} ${this.player.last_name}` ,
            "Height feet": this.player.height_feet,
            "Height inches": this.player.height_inches,
            "Position": this.player.position,
            "Team": `${this.player.team.full_name}`,
            "Weight pounds": this.player.weight_pounds
        }
    }
}

module.exports = PlayersNBA;