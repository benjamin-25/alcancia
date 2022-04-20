import React from 'react';
import {createRoot} from 'react-dom/client';
import AlcanciaApp from './AlcanciaApp';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = createRoot(document.querySelector('#base')); 

root.render(
    <AlcanciaApp/>
);

reportWebVitals();

