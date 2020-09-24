class TeamsNBA{
    constructor(team){
        this.team = team
    }

    get info(){
        return {
            "Id": this.team.id,
            "Abbreviation": this.team.abbreviation,
            "City": this.team.city,
            "Conference": this.team.conference,
            "Division": this.team.division,
            "Full name": this.team.full_name,
            "Name": this.team.name
        }
    }
}

module.exports = TeamsNBA;