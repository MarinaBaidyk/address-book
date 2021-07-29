import React from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import FieldItem from '../../components/FieldItem';
import {Link} from 'react-router-dom';
//import * as contactActions from "../../store/contactList/actions";
import './index.css';

function FieldList({ list, fields, onDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const keys = fields.map(field => field.displayName);

  return (
    <>
      <Link to="/fields/add" className="link-add">
        <Button variant="contained" color="primary">
          Create New Field
        </Button>
      </Link>

      <div className="contact-list-container">
        {keys.map((field) => (
          <FieldItem key={field} field={field} onDelete={handleOpen} />
        ))}
        
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Вы уверены что хотите удалить поле?</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Нет
          </Button>
          <Button onClick={handleClose} color="secondary">
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = state => ({
  list: state.contactList,
  fields: state.fieldList,
});

// const mapDispatchToProps = (dispatch) => ({
//   onDelete: (title) => dispatch(contactActions.contactDelete(title))
// });

export default connect(mapStateToProps)(FieldList);
