import React from 'react';
import ReactModal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const Modal = ({openModal, handleCloseModal, deleteContact, id}) => {
  
  const confirmDelete = () => {
    deleteContact(id);
    console.log('hey a done')
  }
  return <ReactModal
  isOpen={openModal}
  style={customStyles}
  ariaHideApp={false}
  >
    <div className="modal-conten lg-6">
        <div className="modal-header">
            <h5 className="modal-title">Delete</h5>
            <button type="button" className="close" onClick={handleCloseModal}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
      <h5 className="my-5 mx-auto">Are you sure you want to delete this user</h5>
        <div className="d-flex ">
        <button className="btn btn-info" onClick={handleCloseModal}>Cancel</button>
        <button className="btn btn-danger mx-3"
        onClick={confirmDelete}>Delete</button>
       
        </div>
    </div>
  </ReactModal>;
};

export default Modal;
