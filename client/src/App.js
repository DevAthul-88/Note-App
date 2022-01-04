import {useState , useEffect} from 'react'
import axios from 'axios'
import From from './component/Form'
import Notes from './component/Notes'
import {Router , Link} from '@reach/router'

function App() {

  const [isLogin , setLogin] = useState(false)


  return (
    <div className="App">

      {
          isLogin ? <Notes /> : <From />
      }


   
    
    </div>
  );
}

export default App;
