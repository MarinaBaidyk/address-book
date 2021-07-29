import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger'
import rootReducer from './rootReducer';

export default createStore(rootReducer, applyMiddleware(reduxLogger));
