import { createStore, applyMiddleware, compose } from 'redux';
//import reduxLogger from 'redux-logger'
import rootReducer from './rootReducer';
import persistState from "redux-localstorage";

const enchancer = compose(applyMiddleware(), persistState());

//export default createStore(rootReducer, applyMiddleware(reduxLogger));

export default createStore(rootReducer, enchancer); 
