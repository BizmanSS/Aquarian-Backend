const mongoose = require("mongoose");

const Book_Appointment_Schema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        contactNumber: { type: String, required: true },
        timeslot: { type: String, required: true },
        service: { type: String, required: true },
        serviceOther: { type: String },
        comments: { type: String },
    },
    {
        timestamps: true
    }
);

const bookAppointment = mongoose.model("bookAppointment", Book_Appointment_Schema);

module.exports = bookAppointment;
