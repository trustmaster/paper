import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import blog from './reducers';

export default createStore(blog, applyMiddleware(thunk));
