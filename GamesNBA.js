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
            date : this.date.substring(0, 10),
            home_team : this.home_team.full_name,
            home_team_score : this.home_team_score,
            visitor_team : this.visitor_team.full_name,
            visitor_team_score : this.visitor_team_score,
            status : this.status,
            season : this.season
        }
    }
}

module.exports = GamesNBA;
