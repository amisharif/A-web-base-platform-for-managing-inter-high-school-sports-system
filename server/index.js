const express = require('express');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sharifcse:sharifcse@cluster0.1c9o8w2.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(cors());

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

        app.get('/matchscore', async(req, res) => {
           
            const documents = await collection.find({}).toArray();
            console.log('Found documents:', documents);
            res.send(documents)
        })

        app.get('/matchdetails/:id', async (req, res) => {

            const id = req.params.id;
            const documents = await collection.findOne({ _id: new ObjectId(id) });
            console.log('Found documents:', documents);
            res.send(documents)
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

