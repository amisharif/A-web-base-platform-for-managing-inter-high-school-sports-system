
const express = require('express');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sharifcse:sharifcse@cluster0.1c9o8w2.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const db = client.db('MatchDB');
        const collection = db.collection('MatchDetails');

        const schoolDB = client.db('schoolDB');
        const schoolCollection = schoolDB.collection('schoolCollection');

        const schoolInfoDB = client.db('schoolInfoDB');
        const schoolInfoCollection = schoolInfoDB.collection('schoolInfoCollection');

        const TeamInfoDB = client.db('TeamInfoDB');
        const TeamInfoCollection = TeamInfoDB.collection('TeamInfoCollection');



        app.get('/matchscore', async(req, res) => {
           
            const documents = await collection.find({}).toArray();
          //  console.log('Found documents:', documents);
            res.send(documents)
        })

        app.get('/matchdetails/:id', async (req, res) => {

            const id = req.params.id;
            const documents = await collection.findOne({ _id: new ObjectId(id) });
          //  console.log('Found documents:', documents);
            res.send(documents)
        })

        app.get('/showschool', async (req, res) => {
            const shcoolList = await schoolCollection.find({  }).toArray();
           // console.log('Found school:', shcoolList);
            res.send(shcoolList)
        })

        app.get('/showschool/:email', async (req, res) => {

            const query = {email:req.params.email}
            const document = await schoolInfoCollection.findOne(query);
            console.log('Found school:', document);
            res.send(document)
        })

        app.get('/teaminfo/:email', async (req, res) => {
            const query = {schoolEmail:req.params.email}
            const teamInfoList = await TeamInfoCollection.find(query).toArray();
            res.send(teamInfoList)
        })

        app.get('/playerinfo/:birthid', async (req, res) => {

            const query = {birthId:req.params.birthid}
            const playerInfo = await TeamInfoCollection.findOne(query);
            res.send(playerInfo)
        })

        app.post('/playerinfo', async (req, res) => {

            const result = await TeamInfoCollection.insertOne(req.body);
            res.send(result);
           
        })

        app.put('/playerinfo',async(req,res)=>{
            const updatedPlayerInfo = req.body;
            const filter = { birthId: updatedPlayerInfo.birthId }
            const options = { upsert: true };

            const player = {
                $set: {
                    name: updatedPlayerInfo.name,
                    position: updatedPlayerInfo.position,
                    cls: updatedPlayerInfo.cls,
                    photo: updatedPlayerInfo.photo,
                }
            }
            const result = await TeamInfoCollection.updateOne(filter, player, options);
            res.send(result);

           // console.log(updatedData);

        })

        app.delete('/playerinfo/:birthid', async (req, res) => {
            const id = req.params.birthid;
            const query = { birthId:id }
            const result = await TeamInfoCollection.deleteOne(query);
            res.send(result);
        })

        


        app.post('/admin/addschool',async(req,res)=>{
            console.log(req.body);
            const newSchool = req.body;
            const result = await schoolCollection.insertOne(newSchool);
          //  console.log('Inserted document ID:', result.insertedId);
            res.status(200).json({ message: 'Form submitted successfully', data: result.insertedId });
        })
        app.post('/showschool/:id', async (req, res) => {

            const id = req.params.id;
          //  console.log(id);
            try{
                const objectId = new ObjectId(id);
                const filter = { _id: objectId };
                const result = await schoolCollection.deleteOne(filter);
            //    console.log(`${result.deletedCount} document deleted`);
                const count = result.deletedCount
                res.send({ count });
            }catch (error) {
                console.log('Error deleting document:', error);
            } 

            


        })
    

    } finally {
        // Ensures that the client will close when you finish/error
      //  await client.close();
    }
}
run().catch(console.dir);



app.listen(3000,(req,res)=>{
    console.log('Listeaning to port 3000');
})

