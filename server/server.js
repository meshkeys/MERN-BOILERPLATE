const express = require("express");
const mongoose = require('mongoose')
const app = express();


app.get("/api", (req, res) => {
    res.json({"users":["userOne", "userTwo", "userThree", "userFour", "userFive"]
    })
})
app.post('/', (req, res) => {
    res.send('Hello World')
})
app.listen(5000, () => { console.log("server started on port 5000")})