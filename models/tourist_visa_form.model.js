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
    EducationLevel: { type: String, required: true },
    occupation: { type: String, required: true },
    occupationType: { type: String, required: true },
    workExperience: { type: String, required: true },
    yearlyIncome: { type: String, required: true },
    regularITR: { type: String, required: true },
    sponsorInCanada: { type: String, required: true },
    visaRefused: { type: String, required: true },
    visaApplied: { type: String },
    visaAppliedCountry: { type: String },
    visaAppliedDate: { type: Date },
    otherInformation: { type: String },
  },
  {
    timestamps: true,
  }
);


const touristVisaForm = mongoose.model("touristVisaForm", Tourist_Visa_Form_Schema);

module.exports = touristVisaForm;
