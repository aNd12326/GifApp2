// import ReactDOM from 'react-dom';
import React from 'react';
import {GifExpertApp} from './GifExpertApp';
import './index.css';

import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <GifExpertApp />,
  // document.getElementById('root')
);
