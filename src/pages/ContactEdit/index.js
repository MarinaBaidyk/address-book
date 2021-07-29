import React from 'react';
import { connect } from 'react-redux';
import {TextField, Button, InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory, useParams } from "react-router-dom";
//import { useState } from "react";
//import './index.css';

function ContactEdit ({fields, onChangeField, onUpdateContact, formData, list}) {
  const history = useHistory();
  const params = useParams();
  const handleClick = () => {history.push("/contacts");}


  const saveHandler = () => {
    const contactData = fields.reduce((acc, field) => {
      acc[field.name] = formData[field.name];
      return acc;
    }, {});

    onUpdateContact(contactData);
    //console.log(contactData);
  };

  // const keys = fields
  //   .filter(field => field.display)
  //   .map(field => field.name);

  // const titles = list
  //   .map(contact => keys.map(key => contact[key]).join(' '));

  // console.log(list);

  return (
    <>
      <div className="add-contact-item">
        <h2>Edit contact:</h2>
        {fields.map((field, index) => (
          <div className="form-group">
            <span>{field.displayName}:</span>
            <TextField
              key={index}
              value={list[params.contactIndex][field.name]}
              onChange={e => onChangeField(field.name, e.target.value)}
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
            saveHandler();
            handleClick();
          }}
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
   onChangeField: (name, value) => dispatch({
     type: 'FIELD_CHANGE',
     payload: {name, value}
   }),
   onUpdateContact: contactData => dispatch({
     type: 'CONTACT_UPDATE',
     payload: contactData,
   }),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit);