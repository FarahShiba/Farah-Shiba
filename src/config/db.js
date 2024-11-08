// DATABASE CONFIGURATION
// Imports of db admin modules (imports the admin libraries)
var admin = require("firebase-admin");
const config = require("./config");

try {
  console.log("Attempting database connection...");
  // Imports of db credentials
  var serviceAccount = require(config.db.serviceAccountKey);

  // Configure database with our credentials + storage bucket details (for file/image storing)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: config.db.storageBucket,
  });

  // Store core database functions in variable objects
  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  // DB Ping function
  const dbPing = db.listCollections().then((collections) => {
    console.log("Connected to Cloud Firestore");
    for (let collection of collections) {
      console.log(`Found db collection: ${collection.id}`);
    }
  });

  // Export variable objects for use in our application
  module.exports = { db, bucket, dbPing };

  // Catch errors and log them to the console
} catch (err) {
  console.log(err);
}
