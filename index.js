
require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("schoolBooking");

app.get("/", (req, res) => {
    res.send("School booking backend is running! test"); //testing server on postman
});

app.get("/lessons", async (req, res) => {
    try {
        const collection = db.collection("lessons");
        const lessons = await collection.find({}).toArray(); 

        res.json(lessons);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving lessons"); //error might have happened while retrieving lessons
    }
});

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!"); //connection sucessfull message for testing purposes

        app.listen(port, () => {
            console.log("Server running on port " + port);
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message); //error message if failed to connect
    }
}

startServer();
