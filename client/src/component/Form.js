import React from 'react'
import Login from './Login'
import Register from './Register'

function Form({setIsLogged}) {
    return (
        <div className="section">

            <div className="columns">
                <div className="column">
                    <Login setIsLogged={setIsLogged} />
                </div>
                <div className="column">
                    <Register />
                </div>
            </div>
            
        </div>
    )
}

export default Form
