require("dotenv").config()
const express = require('express')
// const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose')
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const permImmFormRoute = require("./routes/permanent_immigration_form.route.js")
const workPermFormRoute = require("./routes/work_permit_form.route.js")
const studyPermFormRoute = require("./routes/study_permit_form.route.js")
const touristVisaFormRoute = require("./routes/tourist_visa_form.route.js")
const bookAppointmentRoute = require("./routes/book_appointment.route.js")
const currenciesRoute = require("./routes/currencies.route.js")
const occupationsRoute = require("./routes/occupations.route.js")
const studyFieldsRoute = require("./routes/study_fields.route.js")
const app = express()
const cors = require('cors');
app.use(express.json())

// Rate Limiter
// const apiLimiter = rateLimit({
//     windowMs: 20 * 60 * 1000, // 20 minutes
//     max: 200, // limit each IP to 60 requests per windowMs
//     message: "Too many requests, please try again later."
// });
// app.use(apiLimiter);

//White-List IP
app.use(cors({
    origin: 'https://www.iaquarian.com'
}));

//Logging the requests
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));


//routes 
app.use("/api/permanent_immigration_form", permImmFormRoute);
app.use("/api/work_permit_form", workPermFormRoute);
app.use("/api/study_permit_form", studyPermFormRoute);
app.use("/api/tourist_visa_form", touristVisaFormRoute);
app.use("/api/book_appointment", bookAppointmentRoute);
app.use("/api/currencies", currenciesRoute)
app.use("/api/occupations", occupationsRoute)
app.use("/api/study_fields", studyFieldsRoute)

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
