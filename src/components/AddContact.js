import React,{useState,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { toast } from "react-toastify";

   
const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [emailrequired, setEmailRequired] = useState(false);
  const [nameRequired, setNameRequired] = useState(false);

  const contacts = useSelector((state) => state)
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(!name) {
      setNameRequired(true);
    }
    if(!email) {
      setEmailRequired(true);
    }
        if(!email  || !name) {
          return toast.warning("Please fill all the neccessary fields");
          
        }
        
      const data = {
        id: contacts[contacts.length -1].id + 1,
        name,
        email,
        username,
        address: {
          city,
        },
      }
      dispatch({type:'ADD_USER', payload:data});
      toast.success("User Added Succssfully");
      history.push('/')
  
  };
  setTimeout(() => {
    setNameRequired(false);
    setEmailRequired(false);
  }, 7000);

  return (
    <div className="container-fluid">
      
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit} autocomplete="off">
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Full name"
                autocomplete="false"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameRequired && <p className="text-danger">This field is required</p>}
            </div>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                autocomplete="false"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailrequired && <p className="text-danger">This field is required</p>}
            </div>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Username"
                autocomplete="false"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="text"
                placeholder="City"
                value={city}
                autocomplete="false"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group mb-3 d-flex justify-content-end">
              <Link to="/" className="btn btn-outline-danger mx-4">
                Cancel
              </Link>
              <button className="btn btn-outline-success" type="submit">
                Add User
              </button>
              {/* <input
                className="btn btn-block btn-dark d-block"
                type="submit"
                value="Add User"
              /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
  

export default AddContact;
