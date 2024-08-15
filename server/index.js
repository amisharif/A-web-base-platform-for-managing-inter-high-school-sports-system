const express = require("express");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const bodyParser = require("body-parser");

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://sharifcse:sharifcse@cluster0.1c9o8w2.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(cors({
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}));


app.use(bodyParser.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );

        const schoolDB = client.db("schoolDB");
        const schoolCollection = schoolDB.collection("schoolCollection");

        const playerInfoDB = client.db("playerInfoDB");
        const playerInfoCollection = playerInfoDB.collection(
            "playerInfoCollection"
        );

        // const standingDB = client.db('standingDB');
        // const standingCollection = standingDB.collection('standingCollection');

        const addMatchDB = client.db("addMatchDB");
        const addMatchCollection = addMatchDB.collection("addMatchCollection");

        const playersInMatch = client.db("playersInMatch");
        const playersInMatchCollection = playersInMatch.collection(
            "playersInMatchCollection"
        );

        const statisticsDB = client.db("statisticsDB");
        const statisticsCollection = statisticsDB.collection(
            "statisticsCollection"
        );

        const groupCloneDB = client.db("groupCloneDB");
        const groupCloneCollection = groupCloneDB.collection(
            "groupCloneCollection"
        );

    
        const standingDB = client.db("standingDB");
        const standingACollection = standingDB.collection(
            "standingACollection"
        );
        const standingBCollection = standingDB.collection(
            "standingBCollection"
        );
        const standingCCollection = standingDB.collection(
            "standingCCollection"
        );
        const standingDCollection = standingDB.collection(
            "standingDCollection"
        );
        const standingECollection = standingDB.collection(
            "standingECollection"
        );
        const standingFCollection = standingDB.collection(
            "standingFCollection"
        );
        const standingGCollection = standingDB.collection(
            "standingGCollection"
        );
        const standingHCollection = standingDB.collection(
            "standingHCollection"
        );

        const managementDB = client.db("managementDB");
        const managementCollection = managementDB.collection(
            "managementCollection"
        );

        const knockoutMatchDB = client.db("knockoutMatchDB");
        const knockoutMatchCollection = knockoutMatchDB.collection(
            "knockoutMatchCollection"
        );


        app.get("/statistics", async (req, res) => {
            const stat = await statisticsCollection
                .find({})
                .sort({ goals: -1 })
                .limit(5)
                .toArray();
            res.send(stat);
        });

        app.get("/matchscore", async (req, res) => {
            const documents = await addMatchCollection.find({}).toArray();
            //  console.log('Found documents:', documents);
            res.send(documents);
        });

        app.get("/showschool", async (req, res) => {
            const shcoolList = await schoolCollection.find({}).toArray();
            res.send(shcoolList);
        });
        app.get("/showschool/:id", async (req, res) => {
            const result = await schoolCollection.findOne({
                _id: new ObjectId(req.params.id),
            });
            res.send(result);
        });

        app.put("/showschool/:id", async (req, res) => {
            //const result = await schoolCollection.findOne({_id: new ObjectId(req.params.id)})
            const filter = { _id: new ObjectId(req.params.id) };
            const options = { upsert: true };
            const school = {
                $set: {
                    name: req.body.name,
                    id: req.body.id,
                    password: req.body.password,
                    district: req.body.district,
                },
            };
            const result = await schoolCollection.updateOne(
                filter,
                school,
                options
            );
            //console.log(result)
            res.send(result);
        });

        app.post("/showschool/:id", async (req, res) => {
            const id = req.params.id;
            //  console.log(id);
            try {
                const objectId = new ObjectId(id);
                const filter = { _id: objectId };
                const result = await schoolCollection.deleteOne(filter);
                //    console.log(`${result.deletedCount} document deleted`);
                const count = result.deletedCount;
                res.send({ count });
            } catch (error) {
                console.log("Error deleting document:", error);
            }
        });

        app.get("/players/:eiin", async (req, res) => {
            const query = { schoolId: req.params.eiin };
            const teamInfoList = await playerInfoCollection
                .find(query)
                .toArray();
            res.send(teamInfoList);
        });

        app.get("/playerinfo/:birthid", async (req, res) => {
            const query = { birthId: req.params.birthid };
            const playerInfo = await playerInfoCollection.findOne(query);
            res.send(playerInfo);
        });

        // -----------------------------playerinfo----------------------------------
        app.get("/playerinfo", async (req, res) => {
            const documents = await playerInfoCollection.find({}).toArray();
            res.send(documents);
        });

        app.get("/topscorer", async (req, res) => {
            const topScorer = await playerInfoCollection
                .find({})
                .sort({ goal: -1 })
                .limit(5)
                .toArray();
            res.send(topScorer);
        });
        app.get("/topassist", async (req, res) => {
            const topAssist = await playerInfoCollection
                .find({})
                .sort({ assist: -1 })
                .limit(5)
                .toArray();
            res.send(topAssist);
        });
        app.get("/topyellowcard", async (req, res) => {
            const topYellowCard = await playerInfoCollection
                .find({})
                .sort({ yellowCard: -1 })
                .limit(5)
                .toArray();
            res.send(topYellowCard);
        });
        app.get("/topredcard", async (req, res) => {
            const topRedCard = await playerInfoCollection
                .find({})
                .sort({ redCard: -1 })
                .limit(5)
                .toArray();
            res.send(topRedCard);
        });

        app.get("/groupclone", async (req, res) => {
           // const documents = await groupCloneCollection.find({}).sort({ matchId: 1 }).toArray();
            const documents = await groupCloneCollection
                .find({})
                .toArray();
            res.send(documents);
        });

        app.post("/groupclone", async (req, res) => {
            const delResult = await groupCloneCollection.deleteMany({});
            const insResult = await groupCloneCollection.insertMany(req.body);
            res.send(insResult);
        });

        app.get("/standing/:group", async (req, res) => {
            const collectionName = "standing" + req.params.group.toUpperCase();
            const requestedCollection = standingDB.collection(
                collectionName + "Collection"
            );

            const data = await requestedCollection
                .aggregate([
                    {
                        $sort: {
                            points: -1,
                            goal_difference: -1,
                            goals_scored: -1,
                        }, // sort by points, goal difference, and goals scored
                    },
                ])
                .toArray();
            res.send(data);
        });

        app.get("/playersinmatch/:matchId", async (req, res) => {
            const query = { matchId: req.params.matchId };
            const result = await playersInMatchCollection
                .find(query)
                .sort({ time: 1 })
                .toArray();
            res.send(result);
        });

        app.get("/management", async (req, res) => {
            const result = await managementCollection.find({}).toArray();
            res.send(result);
        });

        app.post("/standing/:group", async (req, res) => {
            const standData = {
                eiin: "",
                draws: 0,
                goal_difference: 0,
                goals_conceded: 0,
                goals_scored: 0,
                losses: 0,
                matches_played: 0,
                points: 0,
                wins: 0,
            };
            console.log(standData);

            const collectionName = "standing" + req.params.group.toUpperCase();
            const requestedCollection = standingDB.collection(
                collectionName + "Collection"
            ); // Assuming `db` is your MongoDB connection

            const dlt = await requestedCollection.deleteMany({});

            for (let i = 0; i < req.body.length; i++) {
                standData._id = new ObjectId(); // Generate unique ID
                standData.eiin = req.body[i].id;
                const result = await requestedCollection.insertOne(standData);
            }
            res.send(req.body);
        });

        app.post("/updatematchscore", async (req, res) => {
            // const matchData = {
            //     matchId, teamId1, score1, formation1, teamId2, score2, formation2, group: fixtureData[matchId]?.group
            // }

            const matchId = parseInt(req.body.matchId);

            const result = await groupCloneCollection.updateMany(
                { matchId: matchId }, // Filter: Document with specific _id
                {
                    $set: {
                        homeScore: req.body.score1,
                        awayScore: req.body.score2,
                    },
                } // Update: Set the name field
                // Update: Set the name field
            );
            // console.log(req.body)
            res.send(result);
        });

        app.post("/updatematchscore/:group", async (req, res) => {
            // const matchData = {
            //     matchId, teamId1, score1, formation1, teamId2, score2, formation2, group: fixtureData[matchId]?.group,prevS1,prevS2
            // }


            const matchId = parseInt(req.body.matchId);
        

            const group = req.params.group;
           

            const result = await groupCloneCollection.updateMany(
                { matchId: matchId }, // Filter: Document with specific _id
                {
                    $set: {
                        homeScore: req.body.score1,
                        awayScore: req.body.score2,
                    },
                } // Update: Set the name field
                // Update: Set the name field
            );

            // -----------------------------------------------------------------
            const collectionName = "standing" + group;
            const requestedCollection = standingDB.collection(
                collectionName + "Collection"
            );

            const { score1, score2, teamId1, teamId2, prevS1, prevS2 } =
                req.body;
            const query1 = { eiin: teamId1 };
            const document1 = await requestedCollection.findOne(query1);
       

            const query2 = { eiin: teamId2 };
            const document2 = await requestedCollection.findOne(query2);

            // if (prevS1 > prevS2) {
            //     const updateTeam1 = await requestedCollection.updateOne(
            //         { eiin: teamId1 },
            //         {
            //             $set: {
            //                 wins: document1.wins - 1,
            //                 goals_scored: document1.goals_scored - prevS1,
            //                 goals_conceded: document1.goals_scored - prevS2,
            //                 goal_difference:
            //                     totalGoalS1 - totalGoalC1 - goalDiff1,
            //                 points: document1.points - 3,
            //                 matches_played: document1.matches_played - 1,
            //             },
            //         },
            //         { upsert: true }
            //     );
            // }

            let totalGoalS1;
            let totalGoalS2;
            let totalGoalC1;
            let totalGoalC2;
            let goalDiff1;
            let goalDiff2;

            if (document1 === null) {
                totalGoalS1 = score1;
                totalGoalC1 = score2;
                goalDiff1 = 0;
            } else {
                totalGoalS1 = score1 + document1.goals_scored;
                totalGoalC1 = score2 + document1.goals_conceded;
                goalDiff1 = document1.goal_difference;
            }

            if (document2 === null) {
                totalGoalS2 = score2;
                totalGoalC2 = score1;
                goalDiff2 = 0;
            } else {
                totalGoalS2 = score2 + document2.goals_scored;
                totalGoalC2 = score1 + document2.goals_conceded;
                goalDiff2 = document2.goal_difference;
            }

            if (score1 > score2) {
                const incData1 = {
                    wins: 1,
                    draws: 0,
                    losses: 0,
                    goals_scored: score1,
                    goals_conceded: score2,
                    goal_difference: totalGoalS1 - totalGoalC1 - goalDiff1,
                    points: 3,
                    matches_played: 1,
                };
                const result1 = await requestedCollection.updateMany(
                    { eiin: teamId1 },
                    {
                        $inc: incData1,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                const incData2 = {
                    wins: 0,
                    draws: 0,
                    losses: 1,
                    goals_scored: score2,
                    goals_conceded: score1,
                    goal_difference: totalGoalS2 - totalGoalC2 - goalDiff2,
                    points: 0,
                    matches_played: 1,
                };
                const result2 = await requestedCollection.updateMany(
                    { eiin: teamId2 },
                    {
                        $inc: incData2,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );
            } else if (score1 < score2) {
                const incData1 = {
                    wins: 0,
                    draws: 0,
                    losses: 1,
                    goals_scored: score1,
                    goals_conceded: score2,
                    goal_difference: totalGoalS1 - totalGoalC1 - goalDiff1,
                    points: 0,
                    matches_played: 1,
                };
                const result1 = await requestedCollection.updateMany(
                    { eiin: teamId1 },
                    {
                        $inc: incData1,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                const incData2 = {
                    wins: 1,
                    draws: 0,
                    losses: 0,
                    goals_scored: score2,
                    goals_conceded: score1,
                    goal_difference: totalGoalS2 - totalGoalC2 - goalDiff2,
                    points: 3,
                    matches_played: 1,
                };
                const result2 = await requestedCollection.updateMany(
                    { eiin: teamId2 },
                    {
                        $inc: incData2,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );
            } else {
                const incData1 = {
                    wins: 0,
                    draws: 1,
                    losses: 0,
                    goals_scored: score1,
                    goals_conceded: score2,
                    goal_difference: totalGoalS1 - totalGoalC1 - goalDiff1,
                    points: 1,
                    matches_played: 1,
                };
                const result1 = await requestedCollection.updateMany(
                    { eiin: teamId1 },
                    {
                        $inc: incData1,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                const incData2 = {
                    wins: 0,
                    draws: 1,
                    losses: 0,
                    goals_scored: score2,
                    goals_conceded: score1,
                    goal_difference: totalGoalS2 - totalGoalC2 - goalDiff2,
                    points: 1,
                    matches_played: 1,
                };

                const result2 = await requestedCollection.updateMany(
                    { eiin: teamId2 },
                    {
                        $inc: incData2,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );
            }

            res.send(result);
        });

        app.post("/addmatch", async (req, res) => {
            const result = await addMatchCollection.insertOne(req.body);
            // const result = await standCollection.insertOne(req.body);
            const { score1, score2, teamId1, teamId2 } = req.body;

            const query1 = { eiin: teamId1 };
            const document1 = await standCollection.findOne(query1);

            const query2 = { eiin: teamId2 };
            const document2 = await standCollection.findOne(query2);

            let totalGoalS1;
            let totalGoalS2;
            let totalGoalC1;
            let totalGoalC2;
            let goalDiff1;
            let goalDiff2;

            if (document1 === null) {
                totalGoalS1 = score1;
                totalGoalC1 = score2;
                goalDiff1 = 0;
            } else {
                totalGoalS1 = score1 + document1.goals_scored;
                totalGoalC1 = score2 + document1.goals_conceded;
                goalDiff1 = document1.goal_difference;
            }

            if (document2 === null) {
                totalGoalS2 = score2;
                totalGoalC2 = score1;
                goalDiff2 = 0;
            } else {
                totalGoalS2 = score2 + document2.goals_scored;
                totalGoalC2 = score1 + document2.goals_conceded;
                goalDiff2 = document2.goal_difference;
            }

            if (score1 > score2) {
                const incData1 = {
                    wins: 1,
                    draws: 0,
                    losses: 0,
                    goals_scored: score1,
                    goals_conceded: score2,
                    goal_difference: totalGoalS1 - totalGoalC1 - goalDiff1,
                    points: 3,
                    matches_played: 1,
                };
                const result1 = await standCollection.updateMany(
                    { eiin: teamId1 },
                    {
                        $inc: incData1,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                const incData2 = {
                    wins: 0,
                    draws: 0,
                    losses: 1,
                    goals_scored: score2,
                    goals_conceded: score1,
                    goal_difference: totalGoalS2 - totalGoalC2 - goalDiff2,
                    points: 0,
                    matches_played: 1,
                };
                const result2 = await standCollection.updateMany(
                    { eiin: teamId2 },
                    {
                        $inc: incData2,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );
            } else if (score1 < score2) {
                const incData1 = {
                    wins: 0,
                    draws: 0,
                    losses: 1,
                    goals_scored: score1,
                    goals_conceded: score2,
                    goal_difference: totalGoalS1 - totalGoalC1 - goalDiff1,
                    points: 0,
                    matches_played: 1,
                };
                const result1 = await standCollection.updateMany(
                    { eiin: teamId1 },
                    {
                        $inc: incData1,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                const incData2 = {
                    wins: 1,
                    draws: 0,
                    losses: 0,
                    goals_scored: score2,
                    goals_conceded: score1,
                    goal_difference: totalGoalS2 - totalGoalC2 - goalDiff2,
                    points: 3,
                    matches_played: 1,
                };
                const result2 = await standCollection.updateMany(
                    { eiin: teamId2 },
                    {
                        $inc: incData2,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );
            } else {
                const incData1 = {
                    wins: 0,
                    draws: 1,
                    losses: 0,
                    goals_scored: score1,
                    goals_conceded: score2,
                    goal_difference: totalGoalS1 - totalGoalC1 - goalDiff1,
                    points: 1,
                    matches_played: 1,
                };
                const result1 = await standCollection.updateMany(
                    { eiin: teamId1 },
                    {
                        $inc: incData1,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                const incData2 = {
                    wins: 0,
                    draws: 1,
                    losses: 0,
                    goals_scored: score2,
                    goals_conceded: score1,
                    goal_difference: totalGoalS2 - totalGoalC2 - goalDiff2,
                    points: 1,
                    matches_played: 1,
                };

                const result2 = await standCollection.updateMany(
                    { eiin: teamId2 },
                    {
                        $inc: incData2,
                        $setOnInsert: {}, // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );
            }
            //console.log(req.body);
        });

        app.post("/playerinfo", async (req, res) => {
            const result = await playerInfoCollection.insertOne(req.body);
            res.send(result);
        });

        app.post("/playersinmatch", async (req, res) => {
            // const scorerData = { from frontend
            //     matchId, pTeamId, selectedPlayerId, contribution, time, selectedPlayerId
            // }

            const result = await playersInMatchCollection.insertOne(req.body);
            const contri = req.body.contribution;

            if (contri === "Goal") {
                const result = await playerInfoCollection.updateMany(
                    { birthId: req.body.selectedPlayerId },
                    {
                        $inc: { goal: 1 },
                        // $setOnInsert: req.body  // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                res.send(result);
            } else if (contri === "Assist") {
                const result = await playerInfoCollection.updateMany(
                    { birthId: req.body.selectedPlayerId },
                    {
                        $inc: { assist: 1 },
                        // $setOnInsert: req.body  // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                res.send(result);
            } else if (contri === "Yellow Card") {
                const result = await playerInfoCollection.updateMany(
                    { birthId: req.body.selectedPlayerId },
                    {
                        $inc: { yellowCard: 1 },
                        // $setOnInsert: req.body  // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                res.send(result);
            } else if (contri === "Red Card") {
                const result = await playerInfoCollection.updateMany(
                    { birthId: req.body.selectedPlayerId },
                    {
                        $inc: { redCard: 1 },
                        // $setOnInsert: req.body  // Create new document if player doesn't exist
                    },
                    { upsert: true }
                );

                res.send(result);
            }
        });

        app.put("/playerinfo", async (req, res) => {
            const updatedPlayerInfo = req.body;
            const filter = { birthId: updatedPlayerInfo.birthId };
            const options = { upsert: true };

            const player = {
                $set: {
                    name: updatedPlayerInfo.name,
                    position: updatedPlayerInfo.position,
                    cls: updatedPlayerInfo.cls,
                    photo: updatedPlayerInfo.photo,
                },
            };
            const result = await playerInfoCollection.updateOne(
                filter,
                player,
                options
            );
            res.send(result);

            // console.log(updatedData);
        });

        app.delete("/playerinfo/:birthid", async (req, res) => {
            const id = req.params.birthid;
            const query = { birthId: id };
            const result = await playerInfoCollection.deleteOne(query);
            res.send(result);
        });

        app.delete("/management/:id", async (req, res) => {
            const query = { _id: new ObjectId(req.params.id) };
            const result = await managementCollection.deleteOne(query);
            res.send(result);
        });

        app.post("/admin/addschool", async (req, res) => {
            console.log(req.body);
            const newSchool = req.body;
            const result = await schoolCollection.insertOne(newSchool);
            res.status(200).json({
                message: "Form submitted successfully",
                data: result.insertedId,
            });
        });


        app.get("/admin/knockoutmatch",async(req,res)=>{
            const documents = await knockoutMatchCollection.find({}).toArray();
            res.send(documents);
        })
        app.post("/admin/knockoutmatch", async(req,res)=>{
            console.log(req.body);

            const data = await knockoutMatchCollection.deleteMany({});
            const result = await knockoutMatchCollection.insertMany(req.body);
            res.send(result);
        })


        app.post("/updateknockoutmatch", async(req, res) => {
            

            const matchData = req.body;
            const filter = { matchId: matchData.matchId };
            const options = { upsert: true };

            const data = {
                $set: {
                    goals_scored1:matchData.score1,
                    goals_scored2:matchData.score2,
                },
            };
            const result = await knockoutMatchCollection.updateOne(
                filter,
                data,
                options
            );
            res.send(result);
        });



        app.post("/updatesfinal",async(req,res)=>{
            const matchData = req.body;
            //console.log(matchData)
            const filter8 = { matchId: "8" };
            const options = { upsert: true };

            const data8 = {
                $set: {
                    eiin1: matchData.s0,
                    eiin2:matchData.s1,
                },
            };
            const result8 = await knockoutMatchCollection.updateOne(
                filter8,
                data8,
                options
            );


            const filter9 = { matchId: "9" };
            const data9 = {
                $set: {
                    eiin1: matchData.s2,
                    eiin2: matchData.s3,
                },
            };
            const result9 = await knockoutMatchCollection.updateOne(
                filter9,
                data9,
                options
            );



            const filter10 = { matchId: "10" };
            const data10 = {
                $set: {
                    eiin1: matchData.s4,
                    eiin2: matchData.s5,
                },
            };
            const result10 = await knockoutMatchCollection.updateOne(
                filter10,
                data10,
                options
            );
            const filter11 = { matchId: "11" };
            const data11 = {
                $set: {
                    eiin1: matchData.s6,
                    eiin2: matchData.s7,
                },
            };
            const result11 = await knockoutMatchCollection.updateOne(
                filter11,
                data11,
                options
            );


            res.send(result11)
        });

        app.post("/updatefinal",async(req,res)=>{
            
            const matchData = req.body;
            const options = { upsert: true };

            const filter12 = { matchId: "12" };
            const data12 = {
                $set: {
                    eiin1: matchData.s8,
                    eiin2: matchData.s9,
                },
            };
            const result12 = await knockoutMatchCollection.updateOne(
                filter12,
                data12,
                options
            );


            const filter13 = { matchId: "13" };
            const data13 = {
                $set: {
                    eiin1: matchData.s10,
                    eiin2: matchData.s11,
                },
            };
            const result13 = await knockoutMatchCollection.updateOne(
                filter13,
                data13,
                options
            );

            res.send(result13)
        })


        app.post("/updatefinalend", async (req, res) => {
            const matchData = req.body;
            const options = { upsert: true };


            const filter14 = { matchId: "14" };
            const data14 = {
                $set: {
                    eiin1: matchData.s12,
                    eiin2: matchData.s13,
                },
            };
            const result14 = await knockoutMatchCollection.updateOne(
            filter14,
                data14,
                options
            );

            res.send(result14);
        });


        


    } finally {
        // Ensures that the client will close when you finish/error
        //  await client.close();
    }
}
run().catch(console.dir);

app.listen(3000, (req, res) => {
    console.log("Listeaning to port 3000");
});
