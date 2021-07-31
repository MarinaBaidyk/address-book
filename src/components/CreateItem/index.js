import { TextField } from "@material-ui/core";

export default function CreatItem({ title, set, prevValue, keyName, inputValue }) {
    return(
        <>
        <div className="form-group">
            <span className="field-display-info">
                {title}
            </span>
            <TextField 
                value={inputValue} 
                className="textfield" 
                onChange = {e => {
                set({
                    ...prevValue,
                    [keyName]: e.target.value
                }); 
            }}/>
        </div>
        </>

    );
}