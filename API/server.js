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
app.use(cors());

// Add the middle for new data
app.use(express.json());


// Connect to the database
let isConnected = false; // add a flag to avoid multiple connexion
const connectToDatabase = async () => {
  try {
    if (!isConnected) {
      await client.connect();
      console.log('Connecté avec succès à la base de données');
      isConnected = true;
    }

    const dbMongo = client.db(dbName);
    console.log('Sélection de la base de données', dbName);

    //Define the mongo collection
    const collectionMongo = dbMongo.collection(dbCollection);
    console.log('Sélection de la collection ', dbCollection);


    // Define MongoDB ways
    app.get('/monitoring', async (req, res) => {
      const data = await collectionMongo.find().toArray();
      res.send(data);
    });

    // Start the server
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données', error);
  }
};

connectToDatabase();