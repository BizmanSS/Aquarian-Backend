const bookAppointment = require('../models/book_appointment.model.js')

const postBookAppointment = async (req,res) =>{
    try{
        await bookAppointment.create(req.body);
        res.status(200).json({message: "success"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = postBookAppointment
