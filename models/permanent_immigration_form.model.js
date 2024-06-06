const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const Permanent_Immigration_Form_Schema = mongoose.Schema(
    {
        firstName : {
            type: String,
            required: [true]
        },
        
        lastName:{
            type: String,
            required: [true]
        },

        age:{
            type: Number,
            required: [false]
        }
    },
    {
        timestamps: true
    }
)

const permImmForm = mongoose.model("permImmForm", Permanent_Immigration_Form_Schema);

module.exports = permImmForm;