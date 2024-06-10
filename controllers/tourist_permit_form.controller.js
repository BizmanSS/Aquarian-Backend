const touristPermForm = require('../models/tourist_permit_form.model.js')

const postTouristPermForm = async (req,res) =>{
    try{
        const form = await touristPermForm.create(req.body);
        res.status(200).json(form)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const putTouristPermForm = async (req,res) =>{
    try {
        const {id} = req.params;
        const form = await touristPermForm.findByIdAndUpdate(id, req.body);

        if (!form)
        {
            return res.status(404).json({message: "Error: 404"})
        }

        const updatedForm = await touristPermForm.findById(id)
        res.status(200).json(updatedForm)
    }
    catch(error)
    {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    postTouristPermForm,
    putTouristPermForm
}