
const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("School booking backend is running! test");
});

app.get("/lessons", (req, res) => {
    const lessons = [
        {
            id: 1001,
            subject: "Maths",
            location: "St James High School - Maths Room 5",
            day: "Monday",
            time: "4:00 PM - 5:00 PM",
            price: 20,
            availability: 5
        },
        {
            id: 1002,
            subject: "English",
            location: "St James High School - English Room 6",
            day: "Tuesday",
            time: "4:00 PM - 5:00 PM",
            price: 18,
            availability: 5
        }
    ];

    res.json(lessons);
});

app.listen(port, () => {
    console.log("Server running on port test " + port);
});
