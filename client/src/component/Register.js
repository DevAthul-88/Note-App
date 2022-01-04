import {Link} from '@reach/router'
import {useState} from 'react'
import axios from 'axios'

function Register() {

    const [user , setUser] = useState({
        username:'',
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

    async function onSubmit(){
        try {
            const res = await axios.post('/user/register' , user)
            setUser(null)
        } catch (error) {
            error.response.data.error && setError(error.response.data.error)
        }
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

            <label htmlFor="" className="label">User Name</label>
         <input type="text"  className="input" name='username' value={user.username} onChange={onChange} required />

       
         

         <label htmlFor="" className="label mt-4">Email Address</label>
         <input type="email"  className="input" name='email' value={user.email} onChange={onChange}  required/>

         <label htmlFor="" className="label mt-4">Password</label>
         <input type="password"  className="input" name='password' value={user.password} onChange={onChange}  required/>

          
          

         <button className='mt-4 button is-primary' onClick={onSubmit}>
             <strong>Submit</strong>
         </button>

        </div>
    )
}

export default Register
