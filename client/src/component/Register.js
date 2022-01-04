import {Link} from '@reach/router'
import {useState} from 'react'

function Register() {

    const [user , setUser] = useState({

        email:'',
        password:'',
    })

    const [error, setError] = useState(null)

    function onChange(e){

        const {name , value} = e.target

        setUser((prev) => {
            return{
                ...prev,
                [name]:value
            }
        })

    }


    return (
        <div className="section">

          {
              error !== null ? (
               <div>

                    <article className="message is-danger">
                <div className="message-body">
                 {error}
                </div>
              </article>

               </div>
              ) : (null)
          }


            <h1 className="title is-size-1 has-text-weight-bold has-text-centered">Register</h1>
       
         

         <label htmlFor="" className="label mt-4">Email Address</label>
         <input type="email"  className="input" name='email' value={user.email} onChange={onChange}  required/>

         <label htmlFor="" className="label mt-4">Password</label>
         <input type="password"  className="input" name='password' value={user.password} onChange={onChange}  required/>

          
          

         <button className='mt-4 button is-primary'>
             <strong>Submit</strong>
         </button>

        </div>
    )
}

export default Register
