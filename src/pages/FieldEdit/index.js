import { connect } from "react-redux";
import CreateItem from "../../components/CreateItem";
import { useState } from "react";
import { FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import * as actions from "../../store/fieldList/actions";


function FieldEdit ( props ) {
    const params = useParams();
    const history = useHistory();

    const [value, setValue] = useState(props.fields[params.id]);
    const [state, setState] = useState({checked: false});

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
        setValue({...value, display: event.target.checked});
      };

    const handleClick = () => {history.push("/fields")}

    function checkInputValue(){
        for(let key in value){
            if(!value[key]){
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
        fieldName: 'Field Key', 
        key: 'name' 
      },
    ]
    return (
        <>
        <div className="add-field-item">
            {titles.map((field, index) => (
                <CreateItem 
                id={index} 
                title={field.fieldName} 
                inputValue={value[field.key]} 
                keyName={field.key} 
                set={setValue} 
                prevValue={value} />
            ))}
            <FormControlLabel
                control={
                  <Checkbox 
                    checked={value.display}
                    onChange={handleChange} 
                    name="checked" 
                />
              }
                label="Display on the fields page"
            />
            <Button 
              variant="contained" 
              color="primary" 
              disabled={!checkInputValue()} 
              onClick={() => {
                props.onUpdate(value, params.id);
                handleClick();
                }}> Save
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
        onUpdate: (value, id) => dispatch(actions.fieldUpdate(value, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldEdit)