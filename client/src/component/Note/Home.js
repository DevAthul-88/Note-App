import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { format } from "timeago.js";
import axios from "axios";

function Home() {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchNotes(token) {
    const res = await axios.get("/note", {
      headers: { Authorization: token },
    });

    setNotes(res.data);
 
    setLoading(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("tokenStore");
    setToken(token);
    if (token) {
      fetchNotes(token);
    }
  }, []);


 async function deleteNote(id){
  
  try {

    if(token){
      await axios.delete(`/note/${id}` , {
        headers:{Authorization: token}
      })

      fetchNotes(token)
    }
    
  } catch (error) {
    window.location.href = '/'
  }

  }

  return (
    <div className="columns">
      {loading ? (
        <h1 className="title is-size-1 has-text-centered">Loading....</h1>
      ) : (
        <div>
          {notes.length === 0 ? (
            <h1>No notes found!</h1>
          ) : (
            <div>
              {notes.map((e, index) => {
                return(
                  <div className="column" key={index}>
                  <div className="card">
                    <div className="card-header is-shadowless">
                      <div className="card-header-title title">{e.title}</div>
                    </div>

                    <div className="card-content">
                      <div className="content description is-size-4">{e.description}</div>

                      <div className="is-flex is-justify-content-space-between">
                        <div className="content is-capitalized">{e.username}</div>

                        <div className="content ">{format(e.date)}</div>
                      </div>
                    </div>

                    <footer className="card-footer">
                      <a  className="card-footer-item" onClick={() => deleteNote(e._id)}>
                        Delete
                      </a>
                      <Link  to={`edit/${e._id}`} className="card-footer-item">
                       Edit
                      </Link>
                    </footer>
                  </div>
                </div>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
