require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const permImmFormRoute = require("./routes/permanent_immigration_form.route.js")
const app = express()
app.use(express.json())

//routes 
app.use("/api/permanent_immigration_form", permImmFormRoute);

//
PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("Running on port ", PORT ," ...")
})

app.get('/', (req,res) => 
{
    res.send("Testing")
})

mongoose.connect(process.env.MONGO_DB_URL)
.then(() =>{
    console.log("Connected to Db")
}).catch(() => {
    console.log("Connection to Db failed!")
})
