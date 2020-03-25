import { createStore } from 'redux';
import blog from './reducers';
import initialState from './initial';

export default createStore(blog, initialState);
