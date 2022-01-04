import React from 'react'
import Login from './Login'
import Register from './Register'

function Form() {
    return (
        <div className="section">

            <div className="columns">
                <div className="column">
                    <Login />
                </div>
                <div className="column">
                    <Register />
                </div>
            </div>
            
        </div>
    )
}

export default Form
