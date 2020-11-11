import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import App from './containers/App';
import ErrorBoundary from './containers/ErrorBoundary';

ReactDOM.render(
    <ErrorBoundary>
        <App/>
    </ErrorBoundary>,
    document.getElementById('root')
);
