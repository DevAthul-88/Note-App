import React,{useState} from "react";

function CreateNote() {

    const [note , setNote] = useState({
        title:"",
        description:"",
        date:''
    }) 



  return (
    <div>
      <h1 className="title">Create Note</h1>

      <label className="label">Note Title</label>
      <input type="text" value={note.title} name="title" className="input" required/>

      <label className="label mt-4">Note Description</label>
      <textarea name="description" value={note.description} className="textarea" required></textarea>

      <button className="mt-4 button is-primary">Submit</button>
    </div>
  );
}

export default CreateNote;
