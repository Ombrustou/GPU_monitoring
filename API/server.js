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

    app.get('/computer', async (req, res) => {
      const computerCollection = dbMongo.collection('computer');
      const data = await computerCollection.find().toArray();

      res.send(data);
    })

    app.post('/computer', async (req, res) => {
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

    app.delete('/computer/:ip', async (req, res) => {
      const computerCollection = dbMongo.collection('computer');
      try{
        const result = await computerCollection.deleteOne({IP: String(req.params.ip)})
        console.log(result);
        if(result.deletedCount===1){
          try {
            result = await collectionMongo.deleteOne({IP: String(req.params.ip)})
            if(result.deletedCount===1){
              res.sendStatus(204)
            }else{
              res.sendStatus(404)
            }
          } catch (error) {
            console.log(err)
            res.status(500).send('Error while trying to delete a data')
          }
        }else{
          res.sendStatus(404);
        }
      }catch (err){
        console.log(err);
        res.status(500).send('Error while trying to delete a computer')
      }
    })

    app.put('/computer/:ip/:IP/:username/:password', async (req, res) => {
      const computerCollection = dbMongo.collection('computer');
      try{
        const result = await computerCollection.updateOne({IP: String(req.params.ip)},{$set: {IP: req.params.IP, username: req.params.username, password: req.params.password}});
        console.log(result)
        if(result.modifiedCount === 1){
          res.sendStatus(204)
        }else{
          res.sendStatus(404)
        }
      }catch (err){
        console.log(err);
        res.status(500).send('Error while updating a computer')
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