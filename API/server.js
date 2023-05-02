const express = require('express');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const { Number } = require('mongodb');
const cors = require('cors'); // Ajout du module CORS

const url = 'mongodb://localhost:27017';
const dbName = 'monitoring';
const dbCollection = 'data';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Créer une application Express
const app = express();

// Ajouter le middleware CORS
app.use(cors());

// Ajouter le middleware pour gérer les données JSON entrantes
app.use(express.json());


// Connecter à la base de données MongoDB
let isConnected = false; // Ajout d'un drapeau pour éviter les connexions multiples
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


    // Définir les routes pour MongoDB
    app.get('/monitoring', async (req, res) => {
      const data = await collectionMongo.find().toArray();
      res.send(data);
    });

    // Démarrer le serveur
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données', error);
  }
};

connectToDatabase();