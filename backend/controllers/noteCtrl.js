const Notes =  require('../models/noteModel')

const noteCtrl = {

    getNotes: async function(req  , res) {
      
        try {

           

            const notes = await Notes.find({userId:req.user.id})

           
            res.json(notes)
        } catch (error) {
            
            return res.status(500).json({message: error.message})
        }
    },

    createNote: async function(req , res){
      
       try {
        
        const {title , description , date} = req.body
        const newNote = new Notes({
            title,
            description,
            date,
            userId:req.user.id,
            username:req.user.name
        })

        await newNote.save()

        res.json({message:"Note created successfully!"})


       } catch (error) {
           return res.status(500).send({message: error.message});
       } 
    },

    deleteNote: async function(req  , res) {

        try {

            await Notes.findByIdAndDelete(req.params.id)

            res.json({message:"Note deleted successfully!"})
            
        } catch (error) {
            return res.status(500).send({error: error.message});
        }
    },

    updateNote: async function(req , res){

        try {

            const {title , description , date} = req.body

         await Notes.findByIdAndUpdate({_id:req.params.id} , {
             title,description,date
         })

         res.json({message:"Note Updated successfully!"})
            
        } catch (error) {
            return res.status(500).send({message: error.message});
        }
    },


    getOneNotes: async function(req , res){
        try{

            const note = await Notes.findById(req.params.id)
            res.json(note)

        }
        catch(error){
            return res.status(500).send({message:error.message})
        }
    }


}

module.exports = noteCtrl