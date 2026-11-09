
require("dotenv").config();
const app = express();
const port = 3000;
const express = requir("express");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("schoolBooking");

app.get("/", (req, res) => {
    res.send("School booking backend is running! test");
});

app.get("/lessons", async (req, res) => {
    try {

        res.json(lessons);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving lessons");
    
});

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!"); //db connection pass
 app.listen(port, () => {
            console.log("Server running on port " + port);
        };
    } catch (error) {
        console.error("MongoDB connection failed:" ); //testing the db connection fail
    }
}

startServer();
