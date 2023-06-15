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
      const newData = data.map(item =>{
        delete item._id;
        return {
          ...item
        }
      })
      res.send(newData);
    })

    app.get('/history/:ip', async (req, res) => {
      const data = await collectionMongo.findOne({IP: (req.params.ip)});
      var newData = {}
      if(data != null){
        newData = data.history;
      }
      res.send(newData);
    });

    app.get('/last', async (req, res) => {
      const data = await collectionMongo.find().toArray();
    
      // Transform the JSON by replacing the "history" array with the last GPU array
      const newData = data.map(item => {
        const lastGPUArray = item.history[item.history.length - 1].GPU;
        const lasttimeStamp = item.history[item.history.length - 1].timestamp;
        var lastLog = lasttimeStamp;
        if (Object.keys(lastGPUArray).length === 0) {
          var index = 2;
          while (index < item.history.length && Object.keys(item.history[item.history.length - index].GPU).length === 0) {
            index = index + 1;
          }
          if (index === item.history.length) {
            lastLog = item.history[0].timestamp;
          } else {
            lastLog = item.history[item.history.length - index].timestamp;
          }
        }
        lastResponse = lasttimeStamp - lastLog;

        var lastHist = item.history[item.history.length-1]
        delete lastHist.GPU

        delete item.history;
        delete item._id;
        return {
          ...item,
          ...lastHist,
          GPU: lastGPUArray,
          timestamp: lasttimeStamp, //Timestamp of the last GPU
          lastResponse: lastResponse // Last response = 0 if there is GPU's information.
        };
      });
    
      res.json(newData);
    });
    

    app.get('/computer', async (req, res) => {
      const computerCollection = dbMongo.collection('computer');
      const data = await computerCollection.find().toArray();
      const newData = data.map(item => {
        delete item._id;
        return{
          ...item
        }
      })
      res.send(data);
    })

    app.post('/computer', async (req, res) => {
      const computerCollection = dbMongo.collection('computer');
      try{
        console.log(req.body);
        const data = await computerCollection.findOne({IP: String(req.body.IP)})
        console.log("The Data => ",data)
        var result = null;
        if(data == null){
          result = await computerCollection.insertOne(req.body);
          console.log(result.insertedId);
        }else{
          console.log("Computer already exist")
        }
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

    app.put('/computer/:ip', async (req, res) => {
      const { ip } = req.params;
      const { IP, username, password } = req.body;

      canMod = true;

      if(ip != IP){
        const computerCollection = dbMongo.collection('computer');
        try{
          const result = await computerCollection.findOne({ IP: String(IP) })
          if(result != null){
            canMod = false
            res.status(400).send('A computer is already registered with the IP given');
          }else{
            canMod = true
          }
        } catch (err) {
          console.log(err);
          res.status(500).send('Error while fetching a computer');
        }
      }
    
      if(canMod){
        try {
          const result = await computerCollection.updateOne(
            { IP: String(ip) },
            { $set: { IP, username, password } }
          );
      
          console.log(result);
          
          if (result.modifiedCount === 1) {
            res.sendStatus(204);
          } else {
            res.sendStatus(404);
          }
        } catch (err) {
          console.log(err);
          res.status(500).send('Error while updating a computer');
        }
      }
    });
    

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