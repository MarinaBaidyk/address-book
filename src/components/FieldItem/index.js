import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

export default function FieldItem({ field, onDelete }) {
    return (
      <div className="field-item">
        <span className="field-display-info">
          {field}
        </span>
  
        <div className="field-controls">
          <IconButton color="primary" component="span">
            <CreateIcon />
          </IconButton>
  
          <IconButton onClick={onDelete} color="secondary" component="span">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  }