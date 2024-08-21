import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Context from './Contexts/Context'
import Post from './Contexts/PostContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
    <Post>
    <App />
    </Post>
    </Context>
    </BrowserRouter>
  </React.StrictMode>
);

