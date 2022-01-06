import React from "react";
import Navbar from "./Note/Navbar";
import Home from "./Note/Home";
import CreateNote from "./Note/CreateNote";
import EditNote from "./Note/EditNote";
import { Router } from "@reach/router";

function Notes({setIsLogged}) {
  return (
  
  
      <div> 
             <Navbar setIsLogged={setIsLogged} />
       
       <div className="section">
          
  


        <Router>
        <Home path='/' />
          <CreateNote path='/create-note' />
           <EditNote path='/edit/:id' />
        </Router>

        </div>

      </div>
 
  );
}

export default Notes;
