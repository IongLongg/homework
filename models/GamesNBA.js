class GamesNBA{
    constructor(game){
        this.game = game
    }

    get info(){
        return {
            'Date' : this.game.date.substring(0, 10),
            'Home team' : this.game.home_team.full_name,
            'Home team score' : this.game.home_team_score,
            'Visitor team' : this.game.visitor_team.full_name,
            'Visitor team score' : this.game.visitor_team_score,
            'Status' : this.game.status,
            'Season' : this.game.season
        }
    }
}

module.exports = GamesNBA;
