import React from 'react';
import { useState } from "react";
import { connect } from 'react-redux';
import { Button, Dialog, DialogActions, DialogTitle, IconButton, DialogContent } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
//import * as contactActions from "../../store/contactList/actions";
import './index.css';
//import { ControlPointDuplicateOutlined } from '@material-ui/icons';

// function getContactTitle(contact, fields) {
//   return fields
//     .filter(field => field.display)
//      .map (fields => contact[field.name])
//     .join('');
//  }


function ContactList({ list, fields, removeContact }) {
  const history = useHistory();
  const [forRemoving, setForRemoving] = useState(null);
  const [showContact, setShowContact] = useState(null);

  const closeDialog = () => setForRemoving('');
  const removeHandler = () => {
    removeContact(forRemoving);
    closeDialog();
  };

  const closeShowDialog = () => {setShowContact('')}
  
  const keys = fields
    .filter(field => field.display)
    .map(field => field.name);

  const titles = list
    .map(contact => keys.map(key => contact[key]).join(' '));

  const handleClick = index => {history.push(`/contacts/edit/${index}`)};

  return (
    <>
      <Link to="/contacts/add" className="link-add">
        <Button variant="contained" color="primary">
          Create New Contact
        </Button>
      </Link>

      <div className="contact-list-container">
        {titles.map((title, index) => (
          <div className="contact-item"  key={index}>
            <span className="contact-display-info" onClick={() => setShowContact(list[index])}>
              {title}
            </span>
      
            <div className="contact-controls">
              <IconButton color="primary" component="span" onClick={() => handleClick(index)}>
                <CreateIcon /> 
              </IconButton>
      
              <IconButton color="secondary" component="span" onClick={() => setForRemoving(list[index])}>
                <DeleteIcon /> 
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!forRemoving} onClose={closeDialog}>
        <DialogTitle>Вы уверены что хотите удалить контакт?</DialogTitle>

        <DialogActions className="btn-group">
          <Button onClick={closeDialog} color="primary">
            No
          </Button>
          <Button onClick={removeHandler} color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {showContact && <Dialog open={true} onClose={closeShowDialog}>
        <DialogTitle>Данные контакта:</DialogTitle>
        <DialogContent>
          {showContact && fields.filter(field => showContact[field.name]).map(field => (
            <div>
              {field.displayName}: {showContact && showContact[field.name]}
            </div>
          ))} 
        </DialogContent>
        <DialogActions>
          <Button onClick={closeShowDialog} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog> }
    </>
  );
}

const mapStateToProps = state => ({
  list: state.contactList,
  fields: state.fieldList,
});


const mapDispatchToProps = (dispatch) => ({
  removeContact: name => dispatch({
    type: 'CONTACT_DELETE',
    payload: name,
 }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
