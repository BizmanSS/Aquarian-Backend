require("dotenv").config()
const express = require('express')
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose')
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const permImmFormRoute = require("./routes/permanent_immigration_form.route.js")
const workPermFormRoute = require("./routes/work_permit_form.route.js")
const studyPermFormRoute = require("./routes/study_permit_form.route.js")
const touristPermFormRoute = require("./routes/tourist_permit_form.route.js")
const app = express()
const cors = require('cors');
app.use(express.json())

// Rate Limiter
const apiLimiter = rateLimit({
    windowMs: 20 * 60 * 1000, // 20 minutes
    max: 60, // limit each IP to 60 requests per windowMs
    message: "Too many requests, please try again later."
});
app.use(apiLimiter);

//White-List IP
app.use(cors({
    origin: ['http://localhost:3000','https://aquarian.vercel.app']
}));

//Logging the requests
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));


//routes 
app.use("/api/permanent_immigration_form", permImmFormRoute);
app.use("/api/work_permit_form", workPermFormRoute);
app.use("/api/study_permit_form", studyPermFormRoute);
app.use("/api/tourist_permit_form", touristPermFormRoute);

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
