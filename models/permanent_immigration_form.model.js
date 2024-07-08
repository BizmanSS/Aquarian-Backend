const mongoose = require("mongoose");

const Permanent_Immigration_Form_Schema = new mongoose.Schema(
    {
        firstname: { type: String, required: true, maxlength: 50 },
        lastname: { type: String, required: true, maxlength: 50 },
        email: { type: String, required: true, maxlength: 320 },
        phone: { type: String, required: true, maxlength: 50 },
        maritalStatus: { type: String, required: true, maxlength: 50 },
        age: { type: String, required: true, maxlength: 50 },
        nationality: { type: String, required: true, maxlength: 50 },
        region: { type: String, required: true, maxlength: 50 },
        spouseTravelling: { type: String, maxlength: 50 },
        children: { type: String, maxlength: 50 },
        educationalQualifications: [
            {
                educationqualification: { type: String, maxlength: 50 },
                passingyear: { type: String, maxlength: 50 },
                board: { type: String, maxlength: 50 },
                stream: { type: String, maxlength: 50 },
                country: { type: String, maxlength: 50 },
            }
        ],
        educationqualification1: { type: String, required: true, maxlength: 50 },
        workexperiences: [
            {
                workexperience: { type: String, maxlength: 50 },
                employmentHistory: { type: String, maxlength: 50 },
                workCountry: { type: String, maxlength: 50 },
                occupation: { type: String, maxlength: 50 },
            }
        ],
        workexperience1: { type: String, maxlength: 50 },
        englishTest: { type: String, required: true, maxlength: 50 },
        frenchTest: { type: String, required: true, maxlength: 50 },
        englishTestType: { type: String, maxlength: 50 },
        frenchTestType: { type: String, maxlength: 50 },
        englishTestResult: {
            reading: { type: String, maxlength: 50 },
            writing: { type: String, maxlength: 50 },
            listening: { type: String, maxlength: 50 },
            speaking: { type: String, maxlength: 50 }
        },
        frenchTestResult: {
            reading: { type: String, maxlength: 50 },
            writing: { type: String, maxlength: 50 },
            listening: { type: String, maxlength: 50 },
            speaking: { type: String, maxlength: 50 }
        },
        futureTestEnglish: { type: String, maxlength: 50 },
        futureTestFrench: { type: String, maxlength: 50 },
        certificateofNomination: { type: String, required: true, maxlength: 50 },
        canadianjobOffer: { type: String, required: true, maxlength: 50 },
        relativesinCanada: { type: String, required: true, maxlength: 50 },
        otherInformation: { type: String, maxlength: 500 }
    },
    {
        timestamps: true
    }
);

const permImmForm = mongoose.model("permImmForm", Permanent_Immigration_Form_Schema);

module.exports = permImmForm;
