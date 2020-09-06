class GamesNBA{
    constructor(date, home_team, home_team_score, visitor_team, visitor_team_score, status, season){
        this.date = date,
        this.home_team = home_team,
        this.home_team_score = home_team_score,
        this.visitor_team = visitor_team,
        this.visitor_team_score = visitor_team_score,
        this.status = status,
        this.season = season
    }

    get info(){
        return {
            'Date' : this.date.substring(0, 10),
            'Home team' : this.home_team.full_name,
            'Home team score' : this.home_team_score,
            'Visitor team' : this.visitor_team.full_name,
            'Visitor team score' : this.visitor_team_score,
            'Status' : this.status,
            'Season' : this.season
        }
    }
}

module.exports = GamesNBA;
