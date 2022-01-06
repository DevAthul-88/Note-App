import React from "react";

function CreateNote() {

    



  return (
    <div>
      <h1 className="title">Create Note</h1>

      <label className="label">Note Title</label>
      <input type="text" name="title" className="input" />

      <label className="label mt-4">Note Description</label>
      <textarea name="description" id="" className="textarea"></textarea>

      <button className="mt-4 button is-primary">Submit</button>
    </div>
  );
}

export default CreateNote;
