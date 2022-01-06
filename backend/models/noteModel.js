const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({

      title:{
          type:String,
          required: true,
      },

      description:{
          type:String,
          required: true, 
      },

      date:{
      type:Date,
      default:Date.now()
      },

     userId:{
         type:String,
         required: true,
     },

     username:{
         type:String,
         required: true,
     }

},{timestamps:true})


module.exports = mongoose.model('Notes' , noteSchema)