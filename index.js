

require("dotenv").config();

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("schoolBooking");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("School booking backend is running! test");
});

app.get("/lessons", async (req, res) => {
    try {
        const collection = db.collection("lessons");
        const lessons = await collection.find({}).toArray();

        res.json(lessons);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving lessons");
    }
});

app.post("/orders", async (req, res) => {
    try {
        const order = req.body;
        const collection = db.collection("orders");
        const result = await collection.insertOne(order);

        res.status(201).json({
            message: "Order saved successfully!",
            orderId: result.insertedId
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving order");
    }
});

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");

        app.listen(port, () => {
            console.log("Server running on port " + port);
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
}

startServer();
