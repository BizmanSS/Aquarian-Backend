const workPermForm = require('../models/work_permit_form.model.js')

const postWorkPermForm = async (req,res) =>{
    try{
        await workPermForm.create(req.body);
        res.status(200).json({message: "success"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const putWorkPermForm = async (req,res) =>{
    try {
        const {id} = req.params;
        const wiForm = await workPermForm.findByIdAndUpdate(id, req.body);

        if (!wiForm)
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
    postWorkPermForm,
    putWorkPermForm
}