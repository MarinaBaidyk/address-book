import { connect } from "react-redux";
import CreatItem from "../../components/CreateItem";
import { useState } from "react";
import { FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import * as actions from "../../store/fieldList/actions";
import "./index.css"; 

function FieldCreate ( props ) {
  const [value, setValue] = useState();
  const [state, setState] = useState({checked: false});
  const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.checked })
      setValue({...value, display: e.target.checked});
    };
  const history = useHistory();
  const handleClick = () => {history.push("/fields")}

  function checkInputValue() {
    for (let key in value) {
      if(!value[key]) {
        return false;
      }
      return true;
    }
  }
    
  const titles = [
    {
      fieldName: 'Field Name', 
      key: 'displayName'
    }, 
    {
      fieldName: 'Field key', 
      key: 'name' 
    },
  ]

  return (
      <>
      <div className="add-field-item">
          <h2>Contact creating:</h2>
          {titles.map((field, index) => (
             <CreatItem 
              key={index} 
              title={field.fieldName} 
              keyName={field.key} 
              set={setValue} 
              prevValue={value} />
          ))}
          <FormControlLabel
              control={
                <Checkbox 
                  checked={state.checked} 
                  onChange={handleChange}
                  disabled={!checkInputValue()}
                  name="checked" 
                />
              }
              label="Display on the contact"
          />
          <Button 
            variant="contained" 
            color="primary" 
            disabled={!checkInputValue()} 
            onClick={() => {
              props.onSave(value);
              handleClick();
              }}> ADD FIELD
          </Button>
      </div>
      </>
  );
}

const mapStateToProps = state => ({
  fields: state.fieldList,
});

const mapDispatchToProps = (dispatch) => {
  return {
      onSave: (value) => dispatch(actions.fieldCreate(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldCreate)