db.createCollection("teams")
db.teams.insertMany([
    { "_id": "t1", "teamName": "Warriors", "city": "Delhi" },
    { "_id": "t2", "teamName": "Titans", "city": "Mumbai" },
    { "_id": "t3", "teamName": "Rangers", "city": "Bangalore" },
    { "_id": "t4", "teamName": "Falcons", "city": "Hyderabad" }
]
)

db.createCollection("players")
db.players.insertMany([
    { "_id": "p1", "playerName": "Amit Sharma", "age": 24, "teamId": "t1" },
    { "_id": "p2", "playerName": "Rohan Verma", "age": 22, "teamId": "t1" },

    { "_id": "p3", "playerName": "Kunal Mehta", "age": 25, "teamId": "t2" },
    { "_id": "p4", "playerName": "Sagar Patil", "age": 23, "teamId": "t2" },

    { "_id": "p5", "playerName": "Manoj Singh", "age": 26, "teamId": "t3" },
    { "_id": "p6", "playerName": "Arvind Rao", "age": 24, "teamId": "t3" },

    { "_id": "p7", "playerName": "Harsh Vyas", "age": 23, "teamId": "t4" },
    { "_id": "p8", "playerName": "Rishi Nair", "age": 27, "teamId": "t4" }
])

db.createCollection('matches')
db.matches.insertMany([
    { "_id": "m1-p1", "matchId": "m1", "date": "2025-02-10", "location": "Delhi Stadium", "teamId": "t1", "playerId": "p1" },
    { "_id": "m1-p2", "matchId": "m1", "date": "2025-02-10", "location": "Delhi Stadium", "teamId": "t1", "playerId": "p2" },
    { "_id": "m1-p3", "matchId": "m1", "date": "2025-02-10", "location": "Delhi Stadium", "teamId": "t2", "playerId": "p3" },
    { "_id": "m1-p4", "matchId": "m1", "date": "2025-02-10", "location": "Delhi Stadium", "teamId": "t2", "playerId": "p4" },

    { "_id": "m2-p3", "matchId": "m2", "date": "2025-02-15", "location": "Mumbai Arena", "teamId": "t2", "playerId": "p3" },
    { "_id": "m2-p4", "matchId": "m2", "date": "2025-02-15", "location": "Mumbai Arena", "teamId": "t2", "playerId": "p4" },
    { "_id": "m2-p5", "matchId": "m2", "date": "2025-02-15", "location": "Mumbai Arena", "teamId": "t3", "playerId": "p5" },
    { "_id": "m2-p6", "matchId": "m2", "date": "2025-02-15", "location": "Mumbai Arena", "teamId": "t3", "playerId": "p6" },

    { "_id": "m3-p1", "matchId": "m3", "date": "2025-02-20", "location": "Hyderabad Grounds", "teamId": "t1", "playerId": "p1" },
    { "_id": "m3-p2", "matchId": "m3", "date": "2025-02-20", "location": "Hyderabad Grounds", "teamId": "t1", "playerId": "p2" },
    { "_id": "m3-p7", "matchId": "m3", "date": "2025-02-20", "location": "Hyderabad Grounds", "teamId": "t4", "playerId": "p7" },
    { "_id": "m3-p8", "matchId": "m3", "date": "2025-02-20", "location": "Hyderabad Grounds", "teamId": "t4", "playerId": "p8" }
])


// Fetch all the matches, we need team details and player details
db.matches.aggregate([
    {
        $lookup: {
            localField: "playerId",
            from: "players",
            foreignField: "_id",
            as: "Player_Details"
        }
    },
    {
        $lookup: {
            localField: "teamId",
            from: 'teams',
            foreignField: "_id",
            as: 'Team_Details'
        }
    }
])

 