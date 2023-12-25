import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <React.StrictMode >
            <App/>
        </React.StrictMode>
    </Provider>
       
);

