const mongoose = require("mongoose");

const Tourist_Permit_Form_Schema = new mongoose.Schema(
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
        childrenTravelling: { type: String },
        educationLevel: { type: String, required: true },
        occupationLevel: { type: String, required: true },
        occupationType: { type: String, required: true },
        workExperience: { type: String, required: true },
        yearlyIncome: { type: String, required: true },
        incomeTaxReturns: { type: String, required: true },
        relativeSponsor: { type: String, required: true },
        visaRefused: { type: String, required: true },
        otherInformation: { type: String }
    },
    {
        timestamps: true
    }
);

const touristPermForm = mongoose.model("touristPermForm", Tourist_Permit_Form_Schema);

module.exports = touristPermForm;
