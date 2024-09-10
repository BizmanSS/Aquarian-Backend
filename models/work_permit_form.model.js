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
        isSpouseinCanada: { type: String },
        statusOfWife: { type: String },
        status: { type: String },
        EducationLevel: { type: String },
        englishTest: { type: String, required: true },
        children: { type: String },
        haveLmiaJoboffer: { type: String, required: true },
        requireLmiaJoboffer: { type: String },
        nocCodeonLmia: { type: String, required: true },
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
        otherInformation: { type: String },
    },
    {
        timestamps: true,
    }
);


const workPermForm = mongoose.model("workPermForm", Work_Permit_Form_Schema);

module.exports = workPermForm;
