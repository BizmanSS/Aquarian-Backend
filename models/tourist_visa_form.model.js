const mongoose = require("mongoose");

const Tourist_Visa_Form_Schema = new mongoose.Schema(
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
        childrenTravelling: { type: String },
        educationlevel: { type: String, required: true },
        occupationlevel: { type: String, required: true },
        occupationtype: { type: String, required: true },
        workExperience: { type: String, required: true },
        yearlyincome: { type: String, required: true },
        incometaxreturns: { type: String, required: true },
        relativesponsor: { type: String, required: true },
        visarefused: { type: String, required: true },
        otherInformation: { type: String }
    },
    {
        timestamps: true
    }
);

const touristVisaForm = mongoose.model("touristVisaForm", Tourist_Visa_Form_Schema);

module.exports = touristVisaForm;
