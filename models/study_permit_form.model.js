const mongoose = require("mongoose");

const Study_Permit_Form_Schema = new mongoose.Schema(
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
        educationqualification: { type: String, required: true },
        educationqualification1: { type: String, required: true },
        passingyear: { type: String },
        board: { type: String },
        stream: { type: String },
        country: { type: String },
        workexperience: { type: String, required: true },
        workexperience1: { type: String },
        occupation: { type: String },
        employmentHistory: { type: String },
        workCountry: { type: String },
        englishTest: { type: String, required: true },
        englishTestType: { type: String },
        englishMedium: { type: String },
        englishTestResult: {
            reading: { type: String },
            writing: { type: String },
            listening: { type: String },
            speaking: { type: String }
        },
        futureTestEnglish: { type: String },
        gapsAfterStudy: { type: String, required: true },
        counselledBefore: { type: String, required: true },
        visaRefused: { type: String, required: true },
        collegeAbroad: { type: String, required: true },
        fieldOfStudy: { type: String, required: true },
        intrestedCollege: { type: String, required: true },
        otherInformation: { type: String }
    },
    {
        timestamps: true
    }
);

const studyPermForm = mongoose.model("studyPermForm", Study_Permit_Form_Schema);

module.exports = studyPermForm;