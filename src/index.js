import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { GifExpertApp } from './GifExpertApp';

import './index.css';


const container = document.getElementById( 'root' );
const root = ReactDOMClient.createRoot( container );
root.render( <GifExpertApp /> );

// ReactDOM.render(
//     <GifExpertApp />,
//     document.getElementById('root')
// );

// GifExpertApp
// <h2></h2>
// <hr />