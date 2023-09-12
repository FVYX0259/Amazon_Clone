const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MtWEiSHuVjY9YeLMIWIxBDdG7KZTY1eFsqUmkfwwenkk94YzUuyVFIcTypDU1tWN7Nr3IyuNqS7X9WvMcQFdz4n0078bTVw5n");

// API


// App Config
const app = express();

// Middlewares 
app.use(cors({ origin: true}));
app.use(express.json());
// API routes 
app.get('/',(request,response) => response.status(200).send('Hello world'))
// Listen Command 
express.api = functions.https.onRequest(app);

//http://localhost:5001/clone-68b09/us-central1/api