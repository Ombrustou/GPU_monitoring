const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// Name of the database
const dbName = 'monitoring';

// Name of the collection
const collectionName = 'data';

// Function to retrieve data from the collection
function getData() {
  // Connect to the MongoDB server
  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;

    // Select the database
    const db = client.db(dbName);

    // Select the collection
    const collection = db.collection(collectionName);

    // Query the collection to retrieve all data
    collection.find({}).toArray(function(err, docs) {
      if (err) throw err;

      // Store the retrieved data in the "data" variable
      const data = docs;

      // Log the retrieved data to the console for verification
      console.log(data);

      // Close the connection to the MongoDB server
      client.close();
    });
  });
}

// Call the function initially to retrieve the data
getData();

// Set an interval to retrieve the data every 10 minutes
setInterval(getData, 600000);
