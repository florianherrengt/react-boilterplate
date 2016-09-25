import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './store/configureStore';

import './styles/main.scss'

const store = configureStore();

class MyComponent extends React.Component {
    render() {
        return <div>Hello</div>;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById('root')
);
