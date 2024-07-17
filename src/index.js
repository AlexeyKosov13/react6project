import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './Components/Modal/Modal';
import App from './Components/Counter/Counter';
import Quiz from './Components/Quiz/Quiz';
import AppUsers from './Components/Users/AppUsers';
import AppConverter from './Components/Converter/AppConverter';
import AppPhoto from './Components/Photo/App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <Modal /> */}
    {/* <Quiz /> */}
    {/* <AppUsers /> */}
    {/* <AppConverter /> */}
    <AppPhoto />
  </React.StrictMode>,
);
