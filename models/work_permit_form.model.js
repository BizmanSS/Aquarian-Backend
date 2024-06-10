const mongoose = require("mongoose");

const Work_Permit_Form_Schema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        maritalStatus: { type: String, required: true },
        age: { type: String, required: true },
        nationality: { type: String, required: true },
        region: { type: String, required: true },
        spouseTravelling: { type: String },
        children: { type: String },
        statusOfWife: { type: String},
        isSpouseInCanada: { type: String},
        englishTest: { type: String, required: true },
        haveLmiaJobOffer: { type: String, required: true },
        requireLmiaJobOffer: { type: String },
        nocCodeOnLmia: { type: String, required: true },
        workExperience: { type: String, required: true },
        workExperience1: { type: String},
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
