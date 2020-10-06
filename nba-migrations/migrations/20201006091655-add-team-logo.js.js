module.exports = {
    async up(db, client) {
        const teams = await db.collection('teams').find({}).toArray()
        // console.log(teams);
        const requests = teams.map(team => {
            return db.collection('teams').updateOne(
                {_id : team._id}, {
                $set: {
                  logoUrl : `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${team.abbreviation.toLowerCase()}.png`
                }
            })
        })
        return Promise.all(requests)
    },

    async down(db, client) {
      // TODO write the statements to rollback your migration (if possible)
      // Example:
      await db.collection('teams').updateMany({}, {$unset: {logoUrl: ''}});
    }
};
