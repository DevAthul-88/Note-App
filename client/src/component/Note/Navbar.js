import React from 'react'
import { Link } from "@reach/router";

function Navbar({setIsLogged}) {



       function logOut(){
           localStorage.clear()
           setIsLogged(false)
       }





    return (
        <div className="navbar is-spaced has-shadow">
            <div className="navbar-brand">
                <h1 className="title has-text-weight-bold">
                    <Link to="/">
                    Note App
                    </Link>
                </h1>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                 <Link to='create-note'>
                 CREATE NOTE
                 </Link>
                </div>

                <div className="navbar-item" onClick={logOut}>
                 <a>
                   LOGOUT
                 </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
