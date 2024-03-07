import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
//  <StarRating maxRating={5} color="#fcc419" size={24} />
//     <StarRating maxRating={15} color="blue" size={40} />
