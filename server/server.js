const express = require("express");
const mongoose = require('mongoose')
const app = express();

const URI = "mongodb+srv://mesh:kainos4Dunamis@wakabook1.4kfos.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try { await mongoose.connect(URI);
        console.log("connected to mongoDb")
    } catch(error){
        console.log(error);
    }
}


connect();

app.get("/api", (req, res) => {
    res.json({"users":["userOne", "userTwo", "userThree", "userFour", "userFive", "userSix"]
    })
})
app.post('/', (req, res) => {
    res.send('Hello World')
})
app.listen(5000, () => { console.log("server started on port 5000")})