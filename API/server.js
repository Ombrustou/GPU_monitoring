const express = require('express');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const { Number } = require('mongodb');
const cors = require('cors'); // Add CORS module

const url = 'mongodb://localhost:27017';
const dbName = 'monitoring';
const dbCollection = 'data';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Create an Epress app
const app = express();

// Add CORS middleware 
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));

// Add the middle for new data
app.use(express.json());


// Connect to the database
let isConnected = false; // add a flag to avoid multiple connexion
const connectToDatabase = async () => {
  try {
    if (!isConnected) {
      await client.connect();
      isConnected = true;
    }

    const dbMongo = client.db(dbName);

    //Define the mongo collection
    const collectionMongo = dbMongo.collection(dbCollection);


    // Define MongoDB ways
    app.get('/monitoring', async (req, res) => {
      const data = await collectionMongo.find().toArray();

      res.send(data);
    });

    app.post('/monitoring', async (req, res) => {
      const computerCollection = dbMongo.collection('computer');
      try{
        console.log(req.body);
        const result = await computerCollection.insertOne(req.body);
        console.log(result.insertedId);
        res.send(result)
      }catch (err){
        console.log(err);
        res.status(500).send('Error while adding a new computer to the database');
      }
    })

    // Start the server
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Serveur started on port ${port}`);
    });
  } catch (error) {
    console.error('Error during link to data base => ', error);
  }
};

connectToDatabase();