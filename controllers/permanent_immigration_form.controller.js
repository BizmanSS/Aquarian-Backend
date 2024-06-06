const permImmForm = require('../models/permanent_immigration_form.model.js')

const postPermImmForm = async (req,res) =>{
    try{
        const piForm = await permImmForm.create(req.body);
        res.status(200).json(piForm)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const putPermImmForm = async (req,res) =>{
    try {
        const {id} = req.params;
        const piForm = await permImmForm.findByIdAndUpdate(id, req.body);

        if (!piForm)
        {
            return res.status(404).json({message: "Error: 404"})
        }

        const updatedPiForm = await permImmForm.findById(id)
        res.status(200).json(updatedPiForm)
    }
    catch(error)
    {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    postPermImmForm,
    putPermImmForm
}