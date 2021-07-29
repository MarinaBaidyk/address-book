import { combineReducers } from 'redux';
import contactListReducer from './contactList/reducer';
import fieldListReducer from './fieldList/reducer';
import formDataReducer from './formData/reducer'

export default combineReducers({
  contactList: contactListReducer,
  fieldList: fieldListReducer,
  formData: formDataReducer,
});
