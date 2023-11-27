import React from 'react';
import App from './App';  // Adjust the path based on your project structure
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);


reportWebVitals();
