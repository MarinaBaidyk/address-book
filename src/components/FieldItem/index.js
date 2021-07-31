import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

export default function FieldItem({ title, deleteBtn, editBtn }) {
    return (
      <div className="field-item">
        <span className="field-display-info">
          {title}
        </span>
  
        <div className="field-controls">
          <IconButton color="primary" component="span" onClick={editBtn}>
            <CreateIcon />
          </IconButton>
  
          <IconButton onClick={deleteBtn} color="secondary" component="span">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  }
