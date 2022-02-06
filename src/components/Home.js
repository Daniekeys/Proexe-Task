import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Modal from './Modal';
const Home = () => {
   const [openModal, setOpenModal] = useState(false);
   const handleOpenModal = () => {
      setOpenModal(true);
    };
    const handleCloseModal = () => {
      setOpenModal(false);
    };
  const contacts = useSelector(state=> state);
  const dispatch = useDispatch()
 

  const deleteContact = (id) => {
    dispatch({type:'DELETE_USER', payload:id});
    setOpenModal(false);
    toast.success("Contact Deleted successfully")
    
  }
  if (contacts.length === 0) {
    return (
      <div className="container-fluid">
        <h1 className="text-center text-dark py-3 display-2">
          No Contacts to Display
        </h1>
      </div>
    )}

  return (
      <div className="container">
      
          <div className="row">
              <div className="col-md-9 mx-auto my-5 d-flex justify-content-end  ">
            <Link to="/add" className="btn btn-outline-dark ">
            Add User
            </Link>
              </div>
            <div className="col-lg-11 mx-auto ">
        <table className="table table-hover">
          <thead className="text-white bg-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((contact,id) => (
                <tr key={id}>
                    <Modal openModal={openModal} handleCloseModal={handleCloseModal} id={contact.id} deleteContact={deleteContact} />
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td>{contact.address?.city}</td>
                  <td>
                    <Link to= {`/edit/${contact.id}`} className="btn btn-small btn-primary ">
                  Edit
                    </Link>
                  </td>
                  <td>
                    {/* <button type="button" onClick={() => deleteContact(contact.id) } className="btn btn-small btn-danger  ">
                  Delete
                    </button> */}
                    <button type="button" onClick={handleOpenModal} className="btn btn-small btn-danger  ">
                  Delete
                    </button>
                  </td>

                  </tr>
              ))
            }
          </tbody>
        </table>
            </div>
          </div>
        
      </div>
  )
};

export default Home;
