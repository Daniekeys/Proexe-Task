import React,{useState, useEffect} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

const Edit = () => {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const contacts = useSelector(state => state);
  const currentContact = contacts.find((contact) => contact.id === parseInt(id))
 const history = useHistory();
 const dispatch = useDispatch();


  useEffect(() => {
    if(currentContact) {
          setName(currentContact.name);
          setEmail(currentContact.email);
         setUsername(currentContact.username);
          setCity(currentContact.address.city);
          
        }
  
  }, [currentContact]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
      
      const data = {
        id: parseInt(id),
        name,
        email,
        username,
        address: {
          city,
        },
      }
      dispatch({type:'UPDATE_USER', payload:data});
      toast.success("User updated succesful");
      history.push('/')
  
  };

  return (
    <div className="container">
      {
        currentContact ? (
      
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
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group mb-3 d-flex justify-around align-center">
              <input
                className="btn btn-block btn-dark d-block "
                type="submit"
                value="Update "
              />
              <Link to="/" 
              className="btn btn-danger mx-4"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      
    </div>
        ) : (
          <h1 className="display-3 text-center my-auto mx-auto">Contact with id {id} not found</h1>
        ) }
      </div>

  );
};

export default Edit;
