import React from 'react';
import { connect } from 'react-redux';
import {TextField, Button, InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory, useParams } from "react-router-dom";
//import * as actions from "../../store/contactList/actions";
import { useState } from "react";

function ContactEdit ({fields, onChangeContact, onUpdateContact, formData, list}) {
  const history = useHistory();
  const params = useParams();

  const [contactData, setContactData] = useState(list[params.contactIndex]);

  const handleClick = () => {history.push("/contacts");}

  const checkInputValue = () => {
    for (let key in contactData) {
      if (!contactData[key]) {
        return false;
      }
      return true;
    }
  }

  return (
    <>
      <div className="add-contact-item">
        <h2>Edit contact:</h2>
        {fields.map((field, index) => (
          <div className="form-group">
            <span>{field.displayName}:</span>
            <TextField
              key={index}
              value={contactData[field.name]}
              onChange={e => {
                setContactData( {
                  ...contactData,
                  [field.name]: e.target.value,
                })
              }}
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        ))}
        <Button 
          variant="contained" 
          color="primary" 
          className="btn btn-primary" 
          onClick={() => {
            onUpdateContact(contactData, params.contactIndex);
            handleClick();
          }}
          disabled={!checkInputValue()}
          >
          Save
        </Button> 
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  list: state.contactList,
  fields: state.fieldList,
  formData: state.formData || {},
});

const mapDispatchToProps = dispatch => ({
   onChangeContact: (name, value, index) => dispatch({
     type: 'CONTACT_CHANGE',
     payload: {name, value, index}
   }),
   //onConatctUpdate: (contactData ) => dispatch(actions.contactUpdate(contactData))
   onUpdateContact: (contactData, id) => dispatch({
    type: 'CONTACT_UPDATE',
    payload: {contactData, id},
  }),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit);