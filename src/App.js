import React,{useEffect,useState} from 'react'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import AddContact from './components/AddContact';
import Edit from './components/Edit';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const contacts = useSelector(state=> state);

  const dispatch = useDispatch()
  const fetchContacts = async () => {
    const res = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
    dispatch({type:'FILL_USER_DATA', payload:res.data});
  
    };
  useEffect(() => {
    fetchContacts();
    
    // setData(initialState);
    
//  
   
  }, []);
 
  return (
    <div className="App">
      <Navbar />
      <h1 className="display-5 font-weiht-bold mx-5 text-dark">Dashboard</h1>
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
   <Home />
          </Route>
        <Route path="/add" >
    <AddContact />
          </Route>
        <Route path="/edit/:id" >
    <Edit />
          </Route>


        </Switch>
  
    </div>
  );
}

export default App;
