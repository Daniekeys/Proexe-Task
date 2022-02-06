import React,{useState,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { toast } from "react-toastify";

   
const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");

  const contacts = useSelector((state) => state)
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );
   
        if(!email  || !name) {
          return toast.warning("Please fill all the fields");
        }
        if(checkEmail) {
          return toast.error("Email already exists");
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

  return (
    <div className="container-fluid">
      
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Username"
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
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className="btn btn-block btn-dark d-block"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
  

export default AddContact;
