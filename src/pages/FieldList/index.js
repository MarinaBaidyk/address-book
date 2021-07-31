import { connect } from "react-redux";
import FieldItem from "../../components/FieldItem";
import { Link } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as actions from "../../store/fieldList/actions";
import "./index.css";

function FieldList ({ fields, onDelete }){
    const [field, setField] = useState({});
    const [openDeleteModal, setDeleteModal] = useState(false);
    const handleClickOpenDelete = (value) => {
      setField(value);
      setDeleteModal(true);
    };
    const handleCloseDelete = () => {
        setDeleteModal(false);
    };
    const onDeleteHandler = () => {
        setDeleteModal(false);
        onDelete(field);
    }

    const history = useHistory();

    const handleClick = (index) => {history.push(`/fields/edit/${index}`)};

    return (
        <>
          <Link to="/fields/add" className="link-add">
            <Button variant="contained" color="primary">
              Create New Field
            </Button>
          </Link>

          <div className="field-list-container">
              {fields.map((item, index) => (
                  <FieldItem 
                    key={index} 
                    title={item.displayName} 
                    editBtn={() => {handleClick(index)}} 
                    deleteBtn={() => handleClickOpenDelete(fields[index])}
                  />
              ))}
          </div>

          <Dialog open={openDeleteModal} onClose={handleCloseDelete}>
            <DialogTitle>Вы уверены что хотите удалить поле?</DialogTitle>

            <DialogActions className="btn-group">
              <Button onClick={handleCloseDelete} color="primary">
                No
              </Button>
              <Button onClick={onDeleteHandler} color="secondary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </>
    );
}

const mapStateToProps = state => ({
    fields: state.fieldList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (value) => dispatch(actions.fieldDelete(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldList)