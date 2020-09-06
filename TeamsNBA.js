class TeamsNBA{
    constructor(id, abbreviation, city, conference, division, full_name, name){
        this.id = id;
        this.abbreviation = abbreviation;
        this.city = city;
        this.conference = conference;
        this.division = division;
        this.full_name = full_name;
        this.name = name;
    }

    get info(){
        return {
            "Id": this.id,
            "Abbreviation": this.abbreviation,
            "City": this.city,
            "Conference": this.conference,
            "Division": this.division,
            "Full name": this.full_name,
            "Name": this.name
        }
    }
}

module.exports = TeamsNBA;