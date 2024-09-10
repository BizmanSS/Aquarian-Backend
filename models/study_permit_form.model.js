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
        highestEducational: { type: String, required: true }, // Changed from educationqualification
        educationExperience1: { type: String, required: true }, // Changed from educationqualification1
        educationExperiences: [
            {
                levelOfEducation: { type: String },
                startDates: { type: Date },
                endDates: { type: Date },
                field: { type: String },
                board: { type: String },
                country: { type: String },
            },
        ],
        workexperience1: { type: String },
        yearsOfExp: { type: String },
        workExperiences: [
            {
                startDates: { type: Date },
                endDates: { type: Date },
                occupation: { type: String },
                typeOfJob: { type: String },
                employmentHistory: { type: String },
                country: { type: String },
            },
        ],
        englishTest: { type: String, required: true },
        englishTestType: { type: String },
        englishTestResult: {
            reading: { type: String },
            writing: { type: String },
            listening: { type: String },
            speaking: { type: String },
        },
        futureTestEnglish: { type: String },
        examPlanning: { type: String },
        examPlanningDate: { type: Date },
        englishMedium: { type: String },
        class10: { type: String },
        class12: { type: String },
        graduation: { type: String },
        gapsAfterStudy: { type: String, required: true },
        gapStartDate: { type: Date },
        gapEndDate: { type: Date },
        counselledBefore: { type: String, required: true },
        collegeAbroad: { type: String, required: true },
        visaRefused: { type: String, required: true },
        visaApplied: { type: String },
        visaAppliedCountry: { type: String },
        visaAppliedDate: { type: Date },
        intrestedCollege: { type: String, required: true },
        fieldOfStudy: { type: String, required: true },
        otherInformation: { type: String },
    },
    {
        timestamps: true,
    }
);


const studyPermForm = mongoose.model("studyPermForm", Study_Permit_Form_Schema);

module.exports = studyPermForm;