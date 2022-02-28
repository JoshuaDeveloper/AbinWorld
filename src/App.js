import React,{useState,useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HEADER from './components/Header/Header.jsx';
import BODY from './components/Body/Body.jsx';
import LOAD from './components/Loading/Loading';


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
        },[])
  return (
      <div>
          {
              loading ?
                  <LOAD></LOAD>
                  :
                  <div>
                    <HEADER></HEADER>
                    <BODY className='principal'></BODY>
                  </div>
          }
    </div>
  );
}

export default App;
