import React,{useState} from "react";
import axios from "axios";
import {
    Redirect
  } from "@reach/router"

function CreateNote() {

 


    const [note , setNote] = useState({
        title:"",
        description:"",
        date:''
    }) 

    function onChangeValues(e){
      const {name , value} = e.target
      setNote((prev) => {
          return{
              ...prev,
              [name]: value
          }
      })
    }


   async function onSubmit(e){
       e.preventDefault()

       const token = localStorage.getItem("tokenStore")
       
       if(token){
           const {title , description , date} = note

           const newNote = {title , description , date}
 
           await axios.post('/note' , newNote , {
                headers: { Authorization: token }
           })

           return window.location.href = '/'
       }

       try {
           
       } catch (error) {
           window.location.href = '/'
       }
    }


  return (
    <div>
      <h1 className="title">Create Note</h1>

     <form onSubmit={onSubmit}>

     <label className="label">Note Title</label>
      <input type="text" value={note.title} onChange={onChangeValues} name="title" className="input" required/>

      <label className="label mt-4">Note Description</label>
      <textarea name="description" value={note.description} onChange={onChangeValues} className="textarea" required></textarea>

     

       <label className="label mt-4">Date: {note.date}</label>
       <input type="date" name="date" className="input" onChange={onChangeValues} required/>
       <button type='submit' className="mt-4 button is-primary">Submit</button>
     </form>
    </div>
  );
}

export default CreateNote;
