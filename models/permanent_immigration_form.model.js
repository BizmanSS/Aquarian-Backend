const mongoose = require("mongoose");

const Permanent_Immigration_Form_Schema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: String,
        phone: String,
        maritalStatus: String,
        age: String,
        nationality: String,
        region: String,
        spouseTravelling: String,
        children: String,
        educationqualification: String,
        educationqualification1: String,
        passingyear: String,
        board: String,
        stream: String,
        country: String,
        workexperience: String,
        workexperience1: String,
        occupation: String,
        employmentHistory: String,
        workCountry: String,
        englishTest: String,
        frenchTest: String,
        englishTestType: String,
        frenchTestType: String,
        englishTestResult: {
            reading: String,
            writing: String,
            listening: String,
            speaking: String
        },
        frenchTestResult: {
            reading: String,
            writing: String,
            listening: String,
            speaking: String
        },
        futureTestEnglish: String,
        futureTestFrench: String,
        certificateofNomination: String,
        canadianjobOffer: String,
        relativesinCanada: String,
        otherInformation: String
    },
    {
        timestamps: true
    }
);

const permImmForm = mongoose.model("permImmForm", Permanent_Immigration_Form_Schema);

module.exports = permImmForm;
