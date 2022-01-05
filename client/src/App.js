import {useState , useEffect} from 'react'
import axios from 'axios'
import From from './component/Form'
import Notes from './component/Notes'
import {Router , Link} from '@reach/router'

function App() {

  const [isLogin , setLogin] = useState(false)

  useEffect(() => {

    const checkLoggedIn = async () => {
      const token = localStorage.getItem('tokenStore')
      if(token){
            const verifyToken = await axios.get('/user/verify/',{
              headers:{Authorization:token}
            })

            setLogin(verifyToken.data)

            if(verifyToken.data === false) return localStorage.clear()
      }
      else{
        setLogin(false)
      }
    }

    checkLoggedIn()

  },[])

  return (
    <div className="App">

      {
          isLogin ? <Notes /> : <From setIsLogged={setLogin} />
      }


   
    
    </div>
  );
}

export default App;
