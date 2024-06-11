const touristVisaForm = require('../models/tourist_visa_form.model.js')

const postTouristVisaForm = async (req,res) =>{
    try{
        await touristVisaForm.create(req.body);
        res.status(200).json({message: "success"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const putTouristVisaForm = async (req,res) =>{
    try {
        const {id} = req.params;
        const form = await touristVisaForm.findByIdAndUpdate(id, req.body);

        if (!form)
        {
            return res.status(404).json({message: "Error: 404"})
        }

        res.status(200).json({message: "success"})
    }
    catch(error)
    {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    postTouristVisaForm,
    putTouristVisaForm
}