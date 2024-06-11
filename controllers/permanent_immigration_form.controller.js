const permImmForm = require('../models/permanent_immigration_form.model.js')

const postPermImmForm = async (req,res) =>{
    try{
        await permImmForm.create(req.body);
        res.status(200).json({message: "success"})
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

        res.status(200).json({message: "success"})
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