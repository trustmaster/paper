import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import blog from './state/reducers';
import initialState from './state/initial';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(blog, initialState);
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
