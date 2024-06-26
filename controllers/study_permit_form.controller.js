const studyPermForm = require('../models/study_permit_form.model.js')

const postStudyPermForm = async (req,res) =>{
    try{
        await studyPermForm.create(req.body);
        res.status(200).json({message: "success"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const putStudyPermForm = async (req,res) =>{
    try {
        const {id} = req.params;
        const form = await studyPermForm.findByIdAndUpdate(id, req.body);

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
    postStudyPermForm,
    putStudyPermForm
}