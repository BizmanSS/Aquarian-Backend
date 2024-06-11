const mongoose = require("mongoose");

const Work_Permit_Form_Schema = new mongoose.Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        maritalStatus: { type: String, required: true },
        age: { type: String, required: true },
        nationality: { type: String, required: true },
        region: { type: String, required: true },
        spouseTravelling: { type: String },
        children: { type: String },
        statusOfWife: { type: String },
        isSpouseinCanada: { type: String },
        englishTest: { type: String, required: true },
        haveLmiaJoboffer: { type: String, required: true },
        requireLmiaJoboffer: { type: String },
        nocCodeonLmia: { type: String, required: true },
        workexperience: { type: String, required: true },
        workexperience1: { type: String },
        occupation: { type: String },
        employmentHistory: { type: String },
        workCountry: { type: String },
        otherInformation: { type: String }
    },
    {
        timestamps: true
    }
);

const workPermForm = mongoose.model("workPermForm", Work_Permit_Form_Schema);

module.exports = workPermForm;
